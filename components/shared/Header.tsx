import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // Import Image
import { client, urlFor } from '@/lib/sanity'; // Import Sanity client and urlFor

// Define interface for homepage data containing the logo
interface HomepageData {
  mainLogo?: {
    asset: { _ref: string };
    alt?: string; // Include alt text if defined in schema
  };
}

// Make Header an async component to fetch data
const Header = async () => {
  // Fetch the mainLogo from the first homepage document
  const query = `*[_type == "homepage"][0]{ mainLogo{asset, alt} }`;
  const homepageData: HomepageData | null = await client.fetch(query);
  const logo = homepageData?.mainLogo;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg py-2 shadow-md"> {/* Reduced padding slightly */}
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-800">
            {/* Conditional rendering for logo */}
            {logo?.asset ? (
              // If logo exists, render Image within the container div
              // Increased height by another 20% to ~96px
              <div style={{ height: '96px', display: 'flex', alignItems: 'center' }}>
                <Image
                  src={urlFor(logo.asset).url()}
                  alt={logo.alt || "Forrest Group Logo"}
                  height={96} // Increased height
                  width={106} // Increased width maintaining aspect ratio (~11:10)
                  style={{ objectFit: 'contain' }}
                  priority // Move priority prop inside Image tag
                />
              </div>
            ) : (
              // Otherwise, render fallback text
              "Forrest Group"
            )}
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
          <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
          <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;