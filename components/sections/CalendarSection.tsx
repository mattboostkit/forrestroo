// components/sections/CalendarSection.tsx
import React from 'react';

const CalendarSection = () => {
  return (
    <section id="calendar-section" className="py-16 md:py-24 bg-white"> {/* Added id */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Book Your Free Consultation
        </h2>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center min-h-[300px] flex items-center justify-center">
          {/* Placeholder for the calendar embed/component */}
          <p className="text-gray-500">Calendar/Booking Tool will be embedded here.</p>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;