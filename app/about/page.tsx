import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image'; // Import Image component
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use Shadcn Card

export const metadata: Metadata = {
  title: 'About Forrest HR',
  description: 'Learn about Forrest HR, our mission, values, and why small businesses across the UK trust us as their HR partner.',
};

const values = [
  { title: "Integrity & Trust", description: "Building relationships based on honesty and reliability." },
  { title: "Personalised Care", description: "Understanding your unique business needs to provide tailored support." },
  { title: "Responsive & Flexible Support", description: "Adapting our services as your business evolves." },
  { title: "Proactive Approach", description: "Anticipating challenges and providing solutions before they arise." },
];

const whyChooseUs = [
    { title: "Expert Advice", description: "Benefit from HR professionals with extensive, practical experience." },
    { title: "Affordable & Scalable", description: "Solutions designed to grow alongside your business." },
    { title: "Responsive Support", description: "Proactive and timely assistance whenever you need it." },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Placeholder Image Section */}
      <section className="mb-12 md:mb-16">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://via.placeholder.com/1200x400.png?text=Sophie+Forrest+Placeholder" // Placeholder
            alt="Sophie Forrest - Founder of Forrest HR"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          About Forrest HR
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          With over 20 years of diverse HR experience across industries like finance, construction, and hospitality, Sophie Forrest founded Forrest HR in March 2018. Her vision was to provide first-class, practical HR support tailored specifically for small businesses. After expanding services under the Forrest Group name in 2022, the company proudly returned to its roots as Forrest HR in 2025, reaffirming its core commitment. Sophie, an award-winning entrepreneur and qualified Mental Health First Aider, leads the team in delivering proactive, reliable HR solutions, allowing clients to focus on growth while ensuring compliance and fostering positive employee relations.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
             <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
               <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
               <p className="text-gray-600">{value.description}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</CardTitle>
                <CardDescription className="text-gray-600">{reason.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}