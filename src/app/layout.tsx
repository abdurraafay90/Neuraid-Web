import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEURAID | Personal Cognitive Memory Assistant",
  description:
    "A final-year project website for NEURAID, a local-first voice memory assistant for private conversation recall.",
  openGraph: {
    title: "NEURAID | Personal Cognitive Memory Assistant",
    description:
      "Explore NEURAID's problem statement, workflow, edge architecture, privacy model, results, and future scope.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col cursor-none">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
