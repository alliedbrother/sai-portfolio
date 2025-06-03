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
            <svg
              className="relative z-10 w-8 h-8 text-gray-100 group-hover:text-gray-200 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

          <motion.a
            href="https://twitter.com/saiakhil0034"
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