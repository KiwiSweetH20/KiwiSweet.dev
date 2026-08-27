import React from "react";
import "./global.css";

import Navbar from "../components/Navbar";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Navbar/>
        <main>{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}

export default RootLayout;
