import React from "react";
import "./global.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Comic_Relief } from 'next/font/google' // Or your local font import path

// 1. Initialize the font and explicitly declare the custom property name
const comicRelief = Comic_Relief({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-comic-relief',
  
  fallback: ['Comic Sans MS', 'sans-serif', 'arial'], 
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
}

export const metadata = {
  title: "KiwiSweet.dev",
  description: "Front-end developer portfolio",
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-taupe-950 text-slate-11 ${comicRelief.variable} antialiased min-h-screen w-full overflow-x-hidden`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
