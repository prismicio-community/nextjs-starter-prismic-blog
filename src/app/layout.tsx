"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import "@/src/styles/GlobalStyles";
import "@/src/styles/tailwind.scss";
import openSans from "@/src/styles/fontLoad";
import cn from "../lib/utils/cn";
// import StyledComponentsRegistry from "@/src/lib/registry";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen antialiased font-sans", openSans.variable)}
      >
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
