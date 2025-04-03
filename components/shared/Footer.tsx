import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {currentYear} Forrest Group. All rights reserved.</p>
        {/* Add other footer links or info later if needed */}
      </div>
    </footer>
  );
};

export default Footer;