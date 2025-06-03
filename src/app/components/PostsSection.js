"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const PostsSection = () => {
  // Static blog posts data
  const posts = [
    {
      id: 1,
      title: "Understanding Machine Learning Models",
      description: "A deep dive into various ML models and their applications in real-world scenarios.",
      date: "2024-03-15",
      slug: "understanding-ml-models"
    },
    {
      id: 2,
      title: "Data Science Best Practices",
      description: "Essential practices and tips for effective data science projects.",
      date: "2024-03-10",
      slug: "data-science-best-practices"
    },
    {
      id: 3,
      title: "AI in Business Analytics",
      description: "How artificial intelligence is transforming business analytics and decision making.",
      date: "2024-03-05",
      slug: "ai-in-business-analytics"
    }
  ];

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    <section id="posts" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative group"
            >
              <Link href={`/posts/${post.slug}`} className="block h-full">
                {/* Card background with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-950/90 to-blue-900/90 rounded-xl backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:border-blue-500/50 transition-all duration-300"></div>
                
                {/* Card content */}
                <div className="relative p-6 h-full">
                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">{post.title}</h2>
                  <p className="text-gray-200 text-sm mb-4 font-light">{post.description}</p>
                  <p className="text-blue-300 text-sm font-mono absolute bottom-6">{formatDate(post.date)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
