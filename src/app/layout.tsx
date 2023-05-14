"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

import "@/src/styles/GlobalStyles";
import "@/src/styles/tailwind.scss";
// import StyledComponentsRegistry from "@/src/lib/registry";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body tw="min-h-screen">
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
