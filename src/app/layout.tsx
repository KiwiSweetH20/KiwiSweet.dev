import React from "react";
import "./global.css";
import {Providers} from "./lib/Providers";
import { Metadata } from "next";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

import { Comic_Relief, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


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
  metadataBase: new URL('https://kiwi-sweet-dev.vercel.app'),
  title: "KiwiSweet.dev",
  description: "Front-end developer portfolio",
  icons: {
    icon:"/images/Kiwi.svg",
  },

  openGraph: {
    title: "KiwiSweet.dev",
    description: "Front-end developer portfolio",
    url: 'https://kiwi-sweet-dev.vercel.app/',
    siteName: 'KiwiSweet.dev',
    type: 'website',
    images: [
      {
        url: 'https://kiwi-sweet-dev.vercel.app/images/sitePreview.png', 
        width: 1200,                    
        height: 630,                    
        alt: 'KiwiSweet.dev dashboard preview',
      },
    ],
  },}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
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
