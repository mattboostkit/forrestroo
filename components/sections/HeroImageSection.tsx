// components/sections/HeroImageSection.tsx
import React from 'react';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity'; // Import Sanity client and urlFor helper

// Define an interface for the expected data structure
interface HomepageData {
  heroImage?: { // Make heroImage optional in case it's not set
    asset: {
      _ref: string;
      _type: string;
    };
    // Add alt field if you define it in Sanity schema
    // alt?: string;
  };
}

// Make the component async to fetch data
const HeroImageSection = async () => {
  // Fetch the first document of type 'homepage' and select the heroImage field
  const query = `*[_type == "homepage"][0]{ heroImage }`;
  const homepageData: HomepageData | null = await client.fetch(query);

  // Use the Sanity image if available, otherwise fallback (optional)
  const imageUrl = homepageData?.heroImage
    ? urlFor(homepageData.heroImage).width(1920).quality(80).url() // Generate URL, set max width and quality
    : "https://via.placeholder.com/1200x400.png?text=Hero+Image+Missing"; // Fallback placeholder

  const imageAlt = "Forrest Group Hero Image"; // Use dynamic alt text from Sanity if available

  // Return null or a placeholder if no image is found in Sanity
  if (!homepageData?.heroImage) {
     // You might want to return null or a simpler placeholder div
     // return null;
     // Or render the fallback placeholder:
     return (
        <section className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '33.33%' }}>
              <Image
                src={imageUrl} // Fallback placeholder URL
                alt="Hero image missing"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>
     );
  }

  return (
    <section className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10"> {/* Negative margin to overlap slightly */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '33.33%' }}> {/* Aspect ratio 3:1 */}
          <Image
            // Use the Sanity image URL
            src={urlFor(homepageData.heroImage).url()} // Get base URL from urlFor
            alt={imageAlt} // Use dynamic alt text if available
            layout="fill"
            objectFit="cover"
            priority // Load this image eagerly as it's likely above the fold
            // Add sizes and srcset for optimization if needed, though urlFor might handle some aspects
            // Example: sizes="(max-width: 768px) 100vw, 50vw"
            // Consider adding quality prop: quality={80}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImageSection;