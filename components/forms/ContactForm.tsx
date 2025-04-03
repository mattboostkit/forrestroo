"use client"; // Required for form handling state/events later

import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  // Basic handler to prevent default form submission for now
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement actual form submission logic (e.g., send to API endpoint)
    alert("Form submission not implemented yet.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" name="phone" className="mt-1" /> {/* Optional field */}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={5} className="mt-1" />
      </div>
      <Button type="submit" size="lg">Contact Us Today</Button>
    </form>
  );
};

export default ContactForm;