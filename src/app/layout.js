import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sai Akhil Kogilathota - Portfolio",
  description: "Data Scientist | ML Engineer | Data Analyst | Business Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
} 