"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  { id: 'classical-ml', name: 'Classical-ML', slug: 'classical-ml', posts: [
    { title: 'Linear Regression', slug: 'linear-regression' },
    { title: 'Logistic Regression', slug: 'logistic-regression' },
    { title: 'Support Vector Machines', slug: 'svm' },
    { title: 'Decision Trees', slug: 'decision-trees' },
    { title: 'Random Forest', slug: 'random-forest' },
    { title: 'AdaBoost', slug: 'adaboost' },
    { title: 'XGBoost', slug: 'xgboost' },
    { title: 'PCA', slug: 'pca' },
  ]},
  { id: 'deep-learning', name: 'Deep Learning', slug: 'deep-learning', posts: [
    { title: 'Neural Networks', slug: 'neural-networks' },
    { title: 'Deep Architectures', slug: 'deep-architectures' },
    { title: 'Optimization Techniques', slug: 'optimization-techniques' },
    { title: 'Transfer Learning', slug: 'transfer-learning' },
    { title: 'Generative Models', slug: 'generative-models' },
    { title: 'Deep Reinforcement Learning', slug: 'deep-reinforcement-learning' },
  ]},
  { id: 'nlp', name: 'Natural Language Processing', slug: 'nlp', posts: [
    { title: 'Text Preprocessing', slug: 'text-preprocessing' },
    { title: 'Language Models', slug: 'language-models' },
    { title: 'Text Classification', slug: 'text-classification' },
    { title: 'Machine Translation', slug: 'machine-translation' },
    { title: 'Speech Recognition', slug: 'speech-recognition' },
    { title: 'Text Generation', slug: 'text-generation' },
  ]},
  { id: 'llm', name: 'Large Language Models', slug: 'llm', posts: [] },
];

export default function BlogsPage() {
  const [expandedCategories, setExpandedCategories] = useState(['classical-ml']);
  const firstPost = CATEGORIES.find(c => c.posts.length > 0)?.posts[0];

  const toggleCategory = (slug) => {
    setExpandedCategories(prev =>
      prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Blog</h1>

      <div className="space-y-4">
        {CATEGORIES.map((category) => {
          const isExpanded = expandedCategories.includes(category.slug);
          return (
            <div
              key={category.slug}
              className="bg-blue-900/50 rounded-xl border border-blue-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.slug)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-800/30 transition-colors"
              >
                <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 border-t border-blue-700/30">
                      {category.posts.length > 0 ? (
                        <ul className="space-y-2 pt-4">
                          {category.posts.map((post) => (
                            <li key={post.slug}>
                              <Link
                                href={`/blogs/${post.slug}`}
                                className="text-blue-300 hover:text-blue-100 transition-colors block py-1"
                              >
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-blue-400 italic pt-4">Coming soon...</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {firstPost && (
        <div className="mt-8 text-center">
          <Link
            href={`/blogs/${firstPost.slug}`}
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
          >
            Start Reading
          </Link>
        </div>
      )}
    </div>
  );
}
