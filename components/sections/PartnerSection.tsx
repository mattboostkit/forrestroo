// components/sections/PartnerSection.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity'; // Import Sanity client and urlFor helper

// Define an interface for the author data
interface AuthorData {
  name: string;
  image?: { // Make image optional
    asset: {
      _ref: string;
      _type: string;
    };
    // Add alt field if defined in schema
    // alt?: string;
  };
}

// Make the component async
const PartnerSection = async () => {
  // Fetch the author named "Sophie Forrest" (adjust filter if needed)
  // It's safer to filter by slug if available and unique
  const authorQuery = `*[_type == "author" && name == "Sophie Forrest"][0]{ name, image }`;
  const authorData: AuthorData | null = await client.fetch(authorQuery);

  // Determine image URL and alt text
  const imageUrl = authorData?.image
    ? urlFor(authorData.image).width(400).height(400).quality(80).url() // Generate URL, set size/quality
    : "https://via.placeholder.com/400x400.png?text=Image+Missing"; // Fallback placeholder

  const imageAlt = authorData?.name ? `${authorData.name} - Forrest Group` : "Forrest Group Partner";

  return (
    <section className="py-16 md:py-24 bg-white"> {/* White background to contrast with gray testimonials */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Partner with Forrest Group
            </h2>
            <p className="text-gray-600 mb-4">
              Led by Sophie Forrest, our team provides dedicated HR support tailored to the unique needs of small businesses. We believe in building strong partnerships, offering practical advice, and implementing solutions that foster growth and compliance.
            </p>
            <p className="text-gray-600 mb-8">
              From navigating complex employment law to developing effective employee engagement strategies, Forrest Group is here to support your journey. Let us handle the HR complexities so you can focus on your core business.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Learn More & Get Started</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src={imageUrl} // Use the fetched or fallback URL
                alt={imageAlt} // Use the dynamic or fallback alt text
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;