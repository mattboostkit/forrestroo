import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm'; // Import the form

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Forrest Group to discuss your small business HR needs. Schedule a consultation today.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        Let’s Talk About Your HR Needs
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Ready to simplify your HR? Speak to our friendly team and discover how The Forrest Group can help streamline your processes and improve employee relations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Details Section */}
        <div className="space-y-6">
           <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
           <div>
             <h3 className="text-lg font-semibold text-gray-700">Email</h3>
             <a href="mailto:info@theforrestgroup.placeholder" className="text-blue-600 hover:underline">
               info@theforrestgroup.placeholder {/* Placeholder */}
             </a>
           </div>
           <div>
             <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
             <a href="tel:+440123456789" className="text-blue-600 hover:underline">
               +44 (0)123 456 789 {/* Placeholder */}
             </a>
           </div>
           <div>
             <h3 className="text-lg font-semibold text-gray-700">Location</h3>
             <p className="text-gray-600">
               123 Business Street<br />
               London, UK<br />
               SW1A 0AA {/* Placeholder */}
             </p>
           </div>
           {/* Optional: Add a map embed later */}
        </div>
      </div>
    </div>
  );
}