import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { client, urlFor } from '@/lib/sanity';

// Hardcoded service details
const hardcodedServices = [
  {
    id: 'hr',
    title: "Forrest HR Services",
    description: "Comprehensive HR support tailored to your business needs, from recruitment to compliance.",
    bgColorClass: "bg-forrest-hr",
    textColorClass: "text-white"
  },
  {
    id: 'training',
    title: "Forrest Training Academy",
    description: "Upskill your team with expert-led courses designed for practical application in the workplace.",
    bgColorClass: "bg-training-academy",
    textColorClass: "text-gray-800"
  },
  {
    id: 'legal',
    title: "Forrest Legal",
    description: "Navigate employment law confidently with pragmatic advice and documentation support from our legal experts.",
    bgColorClass: "bg-legal",
    textColorClass: "text-gray-800"
  },
  {
    id: 'health',
    title: "Forrest Health and Safety",
    description: "Ensure a safe and compliant work environment with our comprehensive health and safety audits and support.",
    bgColorClass: "bg-health-safety",
    textColorClass: "text-gray-800"
  }
];

// Interfaces for Sanity data
interface ServiceLogo {
  _key: string;
  serviceId?: string;
  logo?: { asset: { _ref: string } };
}

interface HomepageData {
  serviceLogos?: ServiceLogo[];
}

// Fetch service logos from Sanity
async function getServiceLogos(): Promise<ServiceLogo[]> {
  const query = `*[_type == "homepage"][0]{ 'serviceLogos': serviceLogos[]{_key, serviceId, logo{asset}} }`; // Ensure serviceId is fetched
  try {
    const data: HomepageData | null = await client.fetch(query);
    return data?.serviceLogos || [];
  } catch (error) {
    console.error("Failed to fetch service logos from Sanity:", error);
    return [];
  }
}

// Define the async component
const OurServicesSection = async () => {
  const serviceLogos = await getServiceLogos();

  // Return the JSX structure
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardcodedServices.map((service) => {
            // Find the matching logo
            const logoData = serviceLogos.find(l => l.serviceId === service.id)?.logo;

            return (
              <Card
                key={service.id}
                className={`overflow-hidden shadow-lg flex flex-col ${service.bgColorClass} ${service.textColorClass}`}
              >
                {/* Render logo if found */}
                {logoData?.asset && ( // Check for logoData.asset specifically
                  // Removed fixed height (h-20), added padding top/bottom
                  <div className="relative w-full bg-white p-4 py-6 flex items-center justify-center">
                    <Image
                      src={urlFor(logoData).url()} // Remove height constraint for better source resolution
                      alt={`${service.title} logo`}
                      height={80} // Increased display height
                      width={80}  // Adjusted width (assuming closer to square or tall)
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )}
                <CardHeader className="pt-4">
                  <CardTitle className={`text-xl ${!logoData?.asset ? 'pt-4' : ''}`}> {/* Check logoData.asset */}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;