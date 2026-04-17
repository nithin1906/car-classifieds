import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DriveMarket India | Premium Used Cars",
  description: "Find your perfect drive with DriveMarket India. Certified used cars, transparent pricing, and zero hassle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
