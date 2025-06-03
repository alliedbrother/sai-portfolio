"use client";
import { motion } from "framer-motion";

const MainHeroSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center font-sans">
      <div className="mb-4 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight mb-2 animate-fade-in">
          Sai Akhil Kogilathota
        </h1>
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-950/95 to-blue-900/95 rounded-full backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:border-blue-500/50 transition-all duration-300"></div>
            <span className="relative px-6 py-2 text-base md:text-lg text-white font-medium tracking-tight whitespace-nowrap drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              Machine Learning is like magic i have a few tricks up my sleeves
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-4 relative z-20">
          <motion.a
            href="https://www.linkedin.com/in/alliedbrother/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-lg transition-all duration-300
              bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95
              backdrop-blur-md border border-blue-600/50 shadow-[0_8px_32px_0_rgba(30,64,175,0.45)]
              group-hover:from-blue-800/95 group-hover:via-blue-700/95 group-hover:to-blue-800/95
              group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="relative z-10 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors">
              <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://github.com/alliedbrother"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-lg transition-all duration-300
              bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95
              backdrop-blur-md border border-gray-600/50 shadow-[0_8px_32px_0_rgba(30,30,30,0.45)]
              group-hover:from-gray-800/95 group-hover:via-gray-700/95 group-hover:to-gray-800/95
              group-hover:border-gray-500/50 group-hover:shadow-[0_0_20px_rgba(75,75,75,0.5)]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="relative z-10 w-8 h-8 text-gray-100 group-hover:text-gray-200 transition-colors">
              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://x.com/CaptainSai1998"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-lg transition-all duration-300
              bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95
              backdrop-blur-md border border-gray-700/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]
              group-hover:from-gray-900/95 group-hover:via-gray-800/95 group-hover:to-gray-900/95
              group-hover:border-gray-600/50 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="relative z-10 w-8 h-8 text-white group-hover:text-gray-200 transition-colors">
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection; 