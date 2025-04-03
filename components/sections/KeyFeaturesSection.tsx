import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// Import icons from lucide-react (assuming it's installed)
import { Users, ShieldCheck, Scaling } from 'lucide-react';

const features = [
  {
    title: 'Personalised HR Support',
    description: 'Tailored solutions for every aspect of your HR management.',
    icon: Users, // Assign the icon component
  },
  {
    title: 'Compliance Made Easy',
    description: 'Expert guidance to help your business navigate employment law.',
    icon: ShieldCheck, // Assign the icon component
  },
  {
    title: 'Flexible Solutions',
    description: 'HR services scaled to match your changing business needs.',
    icon: Scaling, // Assign the icon component
  },
];

const KeyFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Optional: Add a section title here if desired */}
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center"> {/* Center items in header */}
                {/* Render the icon */}
                {feature.icon && (
                  <div className="mb-4 text-forrest-hr"> {/* Use a theme color */}
                    <feature.icon size={40} strokeWidth={1.5} /> {/* Render icon component */}
                  </div>
                )}
                <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              {/* CardContent or CardFooter can be added if needed */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;