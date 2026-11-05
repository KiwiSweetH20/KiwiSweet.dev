"use client";

import { ThemeProvider } from "@teispace/next-themes"; // 👈 Sourced from the community fork

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
