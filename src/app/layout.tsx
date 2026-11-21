import type { Metadata } from "next";
import { Bangers } from "next/font/google"; // Changed to Bangers!
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import MusicPlayer from "@/components/MusicPlayer";

// Bangers only has one weight (400), which is bold by default.
const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abeer Imran | Portfolio",
  description: "Software Engineering Portfolio",
};
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white selection:bg-red-600 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <MusicPlayer /> 
      </body>
    </html>
  );
}