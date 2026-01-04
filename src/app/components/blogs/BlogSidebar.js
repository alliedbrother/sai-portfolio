"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BlogSidebar = ({ categories, currentSlug }) => {
  // Find which category contains the current post
  const currentCategory = categories.find(cat =>
    cat.posts.some(post => post.slug === currentSlug)
  );

  const [expandedCategories, setExpandedCategories] = useState(
    currentCategory ? [currentCategory.slug] : [categories[0]?.slug]
  );

  const toggleCategory = (categorySlug) => {
    setExpandedCategories(prev =>
      prev.includes(categorySlug)
        ? prev.filter(slug => slug !== categorySlug)
        : [...prev, categorySlug]
    );
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-20 bg-gradient-to-br from-blue-900/90 via-blue-950/90 to-blue-900/90 rounded-xl backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden">
        <div className="p-4 border-b border-blue-700/50">
          <h2 className="text-lg font-semibold text-white">Topics</h2>
        </div>

        <nav className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
          {categories.map((category) => (
            <div key={category.slug} className="mb-1">
              <button
                onClick={() => toggleCategory(category.slug)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-blue-100 hover:bg-blue-800/50 transition-colors duration-200"
              >
                <span className="font-medium text-sm">{category.name}</span>
                <motion.div
                  animate={{ rotate: expandedCategories.includes(category.slug) ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedCategories.includes(category.slug) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-2 pl-3 border-l border-blue-700/50">
                      {category.posts.length > 0 ? (
                        category.posts.map((post) => (
                          <Link
                            key={post.slug}
                            href={`/blogs/${post.slug}`}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                              currentSlug === post.slug
                                ? "bg-blue-600/50 text-white font-medium"
                                : "text-blue-200 hover:bg-blue-800/30 hover:text-white"
                            }`}
                          >
                            {post.title}
                          </Link>
                        ))
                      ) : (
                        <p className="px-3 py-2 text-sm text-blue-400 italic">
                          Coming soon...
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default BlogSidebar;
