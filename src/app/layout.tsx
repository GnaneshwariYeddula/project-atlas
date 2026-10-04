import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AtlasAssistant from "@/components/ai/AtlasAssistant";

import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "Project Atlas",
  description:
    "Explore archaeology, ancient civilizations, artifacts, historical sites, museums, research, and cultural heritage with Project Atlas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />

        <Breadcrumb />

        <div className="flex-1">
          {children}
        </div>

        <Footer />

        <AtlasAssistant />
      </body>
    </html>
  );
}