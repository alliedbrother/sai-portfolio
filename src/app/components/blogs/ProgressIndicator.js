"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProgressIndicator = ({ currentIndex, totalPosts, prevPost, nextPost, categoryName }) => {
  const progress = (currentIndex / totalPosts) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-gradient-to-t from-gray-950 via-gray-950/95 to-transparent pt-8 pb-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/95 via-blue-950/95 to-blue-900/95 rounded-xl backdrop-blur-md border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-3">
            <div className="flex items-center justify-between gap-4">
              {/* Previous Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                {prevPost ? (
                  <Link
                    href={`/blogs/${prevPost.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 border border-blue-600/50 transition-colors duration-200 group"
                  >
                    <ChevronLeft className="w-4 h-4 text-blue-300 group-hover:text-white" />
                    <span className="text-sm text-blue-200 group-hover:text-white truncate hidden sm:block">
                      {prevPost.title}
                    </span>
                    <span className="text-sm text-blue-200 group-hover:text-white sm:hidden">
                      Prev
                    </span>
                  </Link>
                ) : (
                  <div className="px-3 py-2 rounded-lg bg-blue-900/30 border border-blue-800/30 opacity-50 cursor-not-allowed">
                    <span className="text-sm text-blue-400">Start</span>
                  </div>
                )}
              </motion.div>

              {/* Progress Info */}
              <div className="flex-shrink-0 text-center min-w-[120px]">
                <p className="text-xs text-blue-300 mb-1">{categoryName}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {currentIndex}/{totalPosts}
                  </span>
                  <div className="w-16 h-1.5 bg-blue-900/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex justify-end"
              >
                {nextPost ? (
                  <Link
                    href={`/blogs/${nextPost.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 border border-blue-600/50 transition-colors duration-200 group"
                  >
                    <span className="text-sm text-blue-200 group-hover:text-white truncate hidden sm:block">
                      {nextPost.title}
                    </span>
                    <span className="text-sm text-blue-200 group-hover:text-white sm:hidden">
                      Next
                    </span>
                    <ChevronRight className="w-4 h-4 text-blue-300 group-hover:text-white" />
                  </Link>
                ) : (
                  <div className="px-3 py-2 rounded-lg bg-blue-900/30 border border-blue-800/30 opacity-50 cursor-not-allowed">
                    <span className="text-sm text-blue-400">End</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
