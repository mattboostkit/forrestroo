import React from 'react';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity'; // Import Sanity client and urlFor

// Define interface for the client logo data from Sanity
interface ClientLogo {
  _key: string; // Required for arrays
  asset: { _ref: string };
  alt?: string; // Alt text from Sanity field
}

interface HomepageData {
  clientLogos?: ClientLogo[];
}

// Fetch client logos from Sanity
async function getClientLogos(): Promise<ClientLogo[]> {
  // Fetch the clientLogos array from the homepage document
  // Ensure the 'alt' field is selected if it exists in your schema definition for clientLogos array items
  const query = `*[_type == "homepage"][0]{ 'clientLogos': clientLogos[]{_key, asset, alt} }`;
  try {
    const data: HomepageData | null = await client.fetch(query);
    return data?.clientLogos || [];
  } catch (error) {
    console.error("Failed to fetch client logos from Sanity:", error);
    return [];
  }
}

// Make the component async
const ClientLogosSection = async () => {
  const fetchedClientLogos = await getClientLogos();

  return (
    <section className="py-12 bg-white"> {/* Simple white background */}
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center text-gray-600 mb-8">
          Trusted by Businesses Like Yours
        </h2>
        <div className="relative overflow-hidden">
           <div className="flex items-center justify-center space-x-10 md:space-x-16 overflow-x-auto pb-4">
             {/* Check if logos were fetched */}
             {fetchedClientLogos.length === 0 ? (
                <p className="text-gray-500">Client logos unavailable.</p>
             ) : (
                fetchedClientLogos.map((logo) => (
                  <div key={logo._key} className="flex-shrink-0">
                    <Image
                      src={urlFor(logo.asset).url()} // Remove height constraint for better source resolution
                      alt={logo.alt || 'Client Logo'} // Use alt text from Sanity or fallback
                      width={150} // Keep desired display width (adjust if needed)
                      height={60} // Keep desired display height
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))
             )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;