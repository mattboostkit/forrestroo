import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Sensible default title, can be overridden per page
  title: {
    default: "Forrest HR | HR Expertise for Small Businesses",
    template: "%s | Forrest HR",
  },
  description: "Bespoke HR services for small businesses in the UK from Forrest HR. We handle compliance, employee relations, HR outsourcing, documentation, and training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow py-8"> {/* Add padding top/bottom */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
