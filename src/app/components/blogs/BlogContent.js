"use client";
import { motion } from "framer-motion";

const BlogContent = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 min-w-0"
    >
      <div className="bg-gradient-to-br from-blue-900/80 via-blue-950/80 to-blue-900/80 rounded-xl backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-6 md:p-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600/50 text-blue-100 rounded-full border border-blue-500/50">
            {post.categoryName}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-lg text-blue-200 mb-6">{post.excerpt}</p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-blue-300 mb-8 pb-6 border-b border-blue-700/50">
          {post.date && (
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-blue max-w-none
            prose-headings:text-white prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-blue-700/50
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-blue-100 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-blue-300 prose-code:bg-blue-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900/90 prose-pre:border prose-pre:border-blue-700/50 prose-pre:rounded-lg
            prose-ul:text-blue-100 prose-ol:text-blue-100
            prose-li:marker:text-blue-400"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </motion.article>
  );
};

export default BlogContent;
