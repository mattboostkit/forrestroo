import HeroSection from "@/components/sections/HeroSection";
import HeroImageSection from "@/components/sections/HeroImageSection"; // Import Hero Image
import KeyFeaturesSection from "@/components/sections/KeyFeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection"; // Import Testimonials
import LatestBlogPostsSection from "@/components/sections/LatestBlogPostsSection"; // Import Blog Posts
import PartnerSection from "@/components/sections/PartnerSection"; // Import Partner Section
import OurServicesSection from "@/components/sections/OurServicesSection"; // Import Our Services Section
import CalendarSection from "@/components/sections/CalendarSection"; // Import Calendar Section
import ClientLogosSection from "@/components/sections/ClientLogosSection"; // Import Client Logos Section
import React from "react";

// Revalidate the page every 60 seconds (ISR)
export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroImageSection />
      <KeyFeaturesSection />
      <ClientLogosSection />
      <PartnerSection />
      <OurServicesSection />
      <TestimonialsSection />
      <LatestBlogPostsSection />
      <CalendarSection />
    </>
  );
}
