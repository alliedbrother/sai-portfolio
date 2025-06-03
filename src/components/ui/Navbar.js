"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "https://drive.google.com/file/d/1oC4YYB9G1oXiSgqEZY6W3c_VLTutKtcm/view?usp=sharing", label: "Download CV", external: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-gradient-to-r from-blue-950/90 via-blue-900/90 to-blue-950/90 backdrop-blur-md shadow-lg border-b border-blue-800/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* SA Icon */}
          <motion.a
            href="#hero"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 w-10 h-10 rounded-full transition-all duration-300
              bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80
              backdrop-blur-md border-2 border-blue-700/50
              group-hover:from-blue-800/80 group-hover:via-blue-700/80 group-hover:to-blue-800/80
              group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]"
            ></div>
            <div className="relative z-10 w-10 h-10 flex items-center justify-center">
              <span className="text-base font-semibold text-blue-100 tracking-tight">
                S
              </span>
              <span className="text-base font-semibold text-blue-100 tracking-tight">
                A
              </span>
            </div>
          </motion.a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              link.external ? (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 rounded-xl transition-all duration-300
                    bg-gradient-to-br from-blue-800/90 via-blue-700/90 to-blue-800/90
                    backdrop-blur-md border border-blue-500/50 shadow-[0_8px_32px_0_rgba(30,64,175,0.3)]
                    group-hover:from-blue-700/90 group-hover:via-blue-600/90 group-hover:to-blue-700/90
                    group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(29,78,216,0.4)]"
                  ></div>
                  <span className="relative z-10 text-sm font-medium text-blue-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] group-hover:text-white">
                    {link.label}
                  </span>
                </motion.a>
              ) : (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative group px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glass background */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300
                    ${activeSection === link.href.slice(1)
                      ? "bg-gradient-to-br from-blue-700/90 via-blue-600/90 to-blue-700/90 border-blue-400/50 shadow-[0_0_25px_rgba(29,78,216,0.4)]"
                      : "bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80 border-blue-700/30 group-hover:border-blue-500/50"
                    }
                    backdrop-blur-md border shadow-[0_8px_32px_0_rgba(30,64,175,0.3)]
                    group-hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]`}
                  ></div>
                  <span className={`relative z-10 text-sm font-medium
                    ${activeSection === link.href.slice(1)
                      ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                      : "text-blue-50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </motion.a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative group p-2 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 rounded-xl transition-all duration-300
              bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80
              backdrop-blur-md border border-blue-700/30 group-hover:border-blue-500/50
              group-hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]"
            ></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 h-6 w-6 text-blue-100 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="relative group block px-4 py-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Glass background */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300
                  ${activeSection === link.href.slice(1) && !link.external
                    ? "bg-gradient-to-br from-blue-700/90 via-blue-600/90 to-blue-700/90 border-blue-400/50"
                    : "bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80 border-blue-700/30"
                  }
                  backdrop-blur-md border shadow-[0_8px_32px_0_rgba(30,64,175,0.3)]
                  group-hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]`}
                ></div>
                <span className={`relative z-10 text-sm font-medium block text-center
                  ${activeSection === link.href.slice(1) && !link.external
                    ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                    : "text-blue-50 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
} 