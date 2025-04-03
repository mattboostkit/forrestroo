import React from 'react';
import { Button } from '@/components/ui/button'; // Use Shadcn Button
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-main-site to-indigo-100 py-20 md:py-32"> {/* Updated gradient start color */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          HR Expertise Tailored for Small Businesses
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empowering your team, protecting your business, driving your success
        </p>
        <p className="text-md text-gray-700 mb-10 max-w-2xl mx-auto">
          At Forrest Group, we specialise in providing bespoke HR services designed specifically for small businesses. Our experienced team ensures your HR needs are managed efficiently, allowing you to focus on what you do best—growing your business.
        </p>
        {/* Added specific classes for contrast */}
        <Button asChild size="lg" className="bg-forrest-hr text-white hover:bg-opacity-90">
          <Link href="/#calendar-section">Book A Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;