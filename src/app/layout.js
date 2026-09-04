import React from "react";
import "./global.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-taupe-950 text-ctp-subtext1">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
