import React from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Core Services | Forrest Group',
  description: 'Discover how Forrest Group supports small businesses with tailored HR Services, Training, Legal advice, and Health & Safety solutions.',
};

// Define the four core service areas with their details
const coreServices = [
  {
    id: 'hr',
    title: "Forrest HR Services",
    bgColorClass: "bg-forrest-hr", // #66235E
    textColorClass: "text-white", // White text for dark purple
    description: "From recruitment and onboarding to performance management and compliance, our core HR services provide the foundation for a thriving workplace. We act as your dedicated HR partner, ensuring best practices are followed and your people strategy aligns with your business goals."
  },
  {
    id: 'training',
    title: "Forrest Training Academy",
    bgColorClass: "bg-training-academy", // #A0BCFF (Placeholder blue)
    textColorClass: "text-gray-900", // Dark text for light blue
    description: "Invest in your team's potential with targeted training programs. Our academy offers courses covering leadership development, essential HR skills for managers, compliance training, and more, designed to enhance skills and drive performance."
  },
  {
    id: 'legal',
    title: "Forrest Legal",
    bgColorClass: "bg-legal", // #F9CDD4
    textColorClass: "text-gray-900", // Dark text for light pink
    description: "Navigate the complexities of employment law with confidence. We provide pragmatic advice on contracts, policies, disputes, restructures, and compliance, ensuring your business is protected and operates within legal frameworks."
  },
  {
    id: 'health',
    title: "Forrest Health and Safety",
    bgColorClass: "bg-health-safety", // #D5DaD0
    textColorClass: "text-gray-900", // Dark text for light gray
    description: "Create a safe and healthy work environment for your employees. Our services include risk assessments, policy development, safety audits, and ongoing support to ensure you meet your health and safety obligations effectively."
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure footer stays down */}
      {/* Introduction Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Streamlined HR for Growing Businesses
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Managing HR effectively is crucial for small business success, but it can be complex and time-consuming. Forrest Group simplifies HR, providing tailored support across key areas so you can focus on your core operations. We partner with you to build a compliant, engaged, and productive workforce.
          </p>
        </div>
      </section>

      {/* Core Services Sections */}
      <div className="flex-grow"> {/* Allow this section to grow */}
        {coreServices.map((service, index) => (
          <section
            key={service.id}
            className={`py-12 md:py-16 ${service.bgColorClass} ${service.textColorClass}`}
          >
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className={`max-w-4xl ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} ${index % 2 !== 0 ? 'md:text-right' : ''}`}> {/* Alternate alignment */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
                {/* Optional: Add a Link/Button to learn more about this specific service */}
                {/* <Button variant="outline" className={`mt-6 ${service.textColorClass === 'text-white' ? 'border-white hover:bg-white hover:text-forrest-hr' : 'border-gray-800 hover:bg-gray-800 hover:text-white'}`}>
                  Learn More
                </Button> */}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ready to Simplify Your HR?</h2>
          <Button asChild size="lg" className="bg-forrest-hr text-white hover:bg-opacity-90">
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}