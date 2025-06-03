"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "posts", label: "Blog" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // 100px offset for navbar height
      let current = "hero";
      const hero = document.getElementById("hero");
      const projects = document.getElementById("projects");
      const posts = document.getElementById("posts");
      if (posts && scrollPos >= posts.offsetTop) {
        current = "posts";
      } else if (projects && scrollPos >= projects.offsetTop) {
        current = "projects";
      } else {
        current = "hero";
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 mx-auto border border-[#33353F] z-20 bg-gray-900/95 shadow-lg backdrop-blur-md">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
        <Link
          href={"/"}
          className="flex items-center gap-3 text-2xl md:text-3xl font-extrabold italic bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 bg-clip-text text-white drop-shadow-lg tracking-wide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg shadow-md border-2 border-primary-400">SK</span>
          <span className="inline-block animate-pulse" style={{ textShadow: '0 2px 8px #fff, 0 1px 1px #3b82f6' }}>Bienvenue!</span>
        </Link>
        <div
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`relative group flex items-center justify-center text-xl font-bold transition-all duration-300 px-6 py-2.5 rounded-lg`}
                >
                  {/* Glass effect background */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300
                    ${activeSection === section.id
                      ? "bg-gradient-to-br from-blue-950/95 via-blue-900/95 to-blue-950/95 border-blue-700/50 shadow-[0_0_20px_rgba(29,78,216,0.45)]"
                      : "bg-gradient-to-br from-blue-950/85 via-blue-900/85 to-blue-950/85 border-blue-800/30 group-hover:border-blue-600/50 group-hover:from-blue-900/90 group-hover:via-blue-800/90 group-hover:to-blue-900/90"
                    }
                    backdrop-blur-md border shadow-[0_8px_32px_0_rgba(30,64,175,0.45)]`}
                  ></div>
                  
                  {/* Text content */}
                  <span className={`relative z-10 
                    ${activeSection === section.id
                      ? "text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                      : "text-blue-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] group-hover:text-blue-200 group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    {section.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1oC4YYB9G1oXiSgqEZY6W3c_VLTutKtcm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center text-xl font-bold transition-all duration-300 px-6 py-2.5 rounded-lg"
              >
                {/* Glass effect background */}
                <div className="absolute inset-0 rounded-lg transition-all duration-300
                  bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95
                  backdrop-blur-md border border-blue-600/50 shadow-[0_8px_32px_0_rgba(30,64,175,0.45)]
                  group-hover:from-blue-800/95 group-hover:via-blue-700/95 group-hover:to-blue-800/95
                  group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]"
                ></div>
                
                {/* Text content */}
                <span className="relative z-10 text-blue-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:text-blue-200">
                  Download CV
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
