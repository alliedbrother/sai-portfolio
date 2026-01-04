"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2 } from "lucide-react";
import BlogSidebarNav from "./BlogSidebarNav";
import TableOfContents from "./TableOfContents";

export default function BlogPostWrapper({ currentSlug, headings, children }) {
  const [isZenMode, setIsZenMode] = useState(false);

  // Lock body scroll when in zen mode
  useEffect(() => {
    if (isZenMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isZenMode]);

  return (
    <>
      {/* Normal Mode Layout */}
      <div className={`max-w-[1600px] mx-auto px-4 py-8 ${isZenMode ? 'invisible' : ''}`}>
        {/* Single unified container */}
        <div className="bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 rounded-xl border border-slate-700/50 shadow-lg overflow-hidden">
          <div className="flex">
            {/* Left Sidebar - Navigation */}
            <BlogSidebarNav currentSlug={currentSlug} />

            {/* Vertical Divider */}
            <div className="w-px bg-slate-700/50 hidden lg:block" />

            {/* Main Content */}
            <main className="flex-1 min-w-0 p-8 lg:p-10 relative">
              {/* Zen Mode Toggle Button */}
              <button
                onClick={() => setIsZenMode(true)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 transition-all duration-200 group z-10"
                title="Enter Zen Mode"
              >
                <Maximize2 className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </button>

              {children}

              {/* Back link */}
              <div className="mt-12 pt-6 border-t border-slate-700/50">
                <Link
                  href="/blogs"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  <span>&larr;</span>
                  <span>Back to all posts</span>
                </Link>
              </div>
            </main>

            {/* Vertical Divider */}
            <div className="w-px bg-slate-700/50 hidden xl:block" />

            {/* Right Sidebar - Table of Contents */}
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>

      {/* Zen Mode Full Screen Overlay */}
      <AnimatePresence>
        {isZenMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto"
          >
            {/* Close on background click */}
            <div
              className="absolute inset-0"
              onClick={() => setIsZenMode(false)}
            />

            {/* Zen Mode Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative min-h-screen px-6 sm:px-12 lg:px-20 py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <article className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 rounded-xl border border-slate-700/50 shadow-2xl p-8 lg:p-12 relative">
                {/* Exit Zen Mode Button */}
                <button
                  onClick={() => setIsZenMode(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 transition-all duration-200 group z-10"
                  title="Exit Zen Mode"
                >
                  <Minimize2 className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </button>

                {children}

                {/* Back link */}
                <div className="mt-12 pt-6 border-t border-slate-700/50">
                  <Link
                    href="/blogs"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                  >
                    <span>&larr;</span>
                    <span>Back to all posts</span>
                  </Link>
                </div>
              </article>

              {/* Zen Mode Exit Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-6"
              >
                <p className="text-slate-500 text-sm">
                  Press <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-400 mx-1">Esc</kbd> or click outside to exit Zen Mode
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard listener for Escape key */}
      <ZenModeKeyListener isZenMode={isZenMode} setIsZenMode={setIsZenMode} />
    </>
  );
}

function ZenModeKeyListener({ isZenMode, setIsZenMode }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isZenMode) {
        setIsZenMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZenMode, setIsZenMode]);

  return null;
}
