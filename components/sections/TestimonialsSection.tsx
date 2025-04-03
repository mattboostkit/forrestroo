// components/sections/TestimonialsSection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming Shadcn Card

// Placeholder testimonial data
const testimonials = [
  {
    quote: "Forrest Group transformed how we handle HR. Their team is knowledgeable, responsive, and truly understands the challenges small businesses face. Highly recommended!",
    name: "Jane Doe",
    title: "CEO, Tech Startup Ltd."
  },
  {
    quote: "Navigating complex employment law was daunting until we partnered with Forrest Group. Their guidance has been invaluable, saving us time and potential headaches.",
    name: "John Smith",
    title: "Owner, Local Cafe"
  },
  {
    quote: "The onboarding process implemented by Forrest Group has significantly improved our new hire experience. Their practical solutions make a real difference.",
    name: "Alice Brown",
    title: "Manager, Creative Agency"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardHeader className="pt-0"> {/* Adjust padding */}
                <CardTitle className="text-md font-semibold">{testimonial.name}</CardTitle>
                <CardDescription className="text-sm">{testimonial.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;