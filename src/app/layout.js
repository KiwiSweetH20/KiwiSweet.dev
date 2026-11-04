import React from "react";
import "./global.css";
import {Providers} from "./Providers";

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

export const metadata = {
  title: "KiwiSweet.dev",
  description: "Front-end developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-slate-1 text-slate-12 ${comicRelief.variable} antialiased min-h-screen`}>
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
