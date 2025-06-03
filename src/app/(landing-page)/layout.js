import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Header";
// import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sai Akhil Kogilathota - Portfolio",
  description: "Data Scientist | ML Engineer | Data Analyst | Business Analyst",
};

export default function LandingLayout({ children }) {
  return (
    <div className={`min-h-screen ${inter.variable}`}>
      {/* <Navbar /> */}
      <div className="mt-7 md:mt-20">{children}</div>
      {/* <Footer /> */}
      <Analytics />
    </div>
  );
}
