import React from "react";
import "./global.css";
import {Providers} from "./lib/Providers";
import { Metadata } from "next";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

import { Comic_Relief } from "next/font/google"; // Or your local font import path

// 1. Initialize the font and explicitly declare the custom property name
const comicRelief = Comic_Relief({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-comic-relief",

  fallback: ["Comic Sans MS", "sans-serif", "arial"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 6,
};

export const metadata: Metadata = {
  title: 'KiwiSweet.dev',
  description: 'Front-end developer portfolio',
  
  // Open Graph configuration (for LinkedIn, Facebook, Slack, etc.)
  openGraph: {
    title: 'KiwiSweet.dev',
    description: 'Front-end developer portfolio',
    url: 'https://kiwi-sweet-dev.vercel.app',
    siteName: 'KiwiSweet.dev',
    type: 'website',
    images: [
      {
        url: 'https://vercel.app', 
        width: 1200,                   
        height: 630,                    
        alt: 'KiwiSweet.dev dashboard preview',
      },
    ],
  },

  // Twitter / X specific configuration
  twitter: {
    card: 'summary_large_image', // Tells the platform to use the large image layout style
    title: 'KiwiSweet.dev',
    description: 'Front-end developer portfolio',
    images: ['https://vercel.app'],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-slate-1 text-slate-12 ${comicRelief.variable} antialiased min-h-screen`} suppressHydrationWarning>
        <Providers>
          <Navbar />
          <ThemeToggle/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
