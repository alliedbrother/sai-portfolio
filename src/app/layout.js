import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website showcasing my work and experience",
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
      </body>
    </html>
  );
} 