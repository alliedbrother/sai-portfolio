"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";

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

export default function BlogSidebarNav({ currentSlug }) {
  const currentCategory = CATEGORIES.find(cat =>
    cat.posts.some(post => post.slug === currentSlug)
  );
  const [expandedCategories, setExpandedCategories] = useState(
    currentCategory ? [currentCategory.slug] : ['classical-ml']
  );

  const toggleCategory = (slug) => {
    setExpandedCategories(prev =>
      prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  return (
    <aside className="w-80 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24">
        {/* Progress indicator at top */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Progress</span>
            <span className="text-white font-medium">1/20</span>
          </div>
          <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-[5%] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <nav className="max-h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar">
            {CATEGORIES.map((category) => {
              const isExpanded = expandedCategories.includes(category.slug);
              const hasCurrentPost = category.posts.some(p => p.slug === currentSlug);

              return (
                <div key={category.slug} className="border-b border-slate-700/30 last:border-b-0">
                  <button
                    onClick={() => toggleCategory(category.slug)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-200 ${
                      hasCurrentPost ? 'bg-blue-900/30' : 'hover:bg-slate-800/50'
                    }`}
                  >
                    <span className={`font-medium text-sm ${hasCurrentPost ? 'text-blue-300' : 'text-slate-200'}`}>
                      {category.name}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className={`w-4 h-4 ${hasCurrentPost ? 'text-blue-400' : 'text-slate-400'}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2">
                          {category.posts.length > 0 ? (
                            category.posts.map((post) => (
                              <Link
                                key={post.slug}
                                href={`/blogs/${post.slug}`}
                                className={`flex items-start gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                                  currentSlug === post.slug
                                    ? "bg-blue-600/40 text-white border-l-2 border-blue-400"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-2 border-transparent"
                                }`}
                              >
                                <FileText className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                  currentSlug === post.slug ? 'text-blue-300' : 'text-slate-500'
                                }`} />
                                <span className="leading-tight">{post.title}</span>
                              </Link>
                            ))
                          ) : (
                            <p className="px-4 py-2 text-sm text-slate-500 italic">
                              Coming soon...
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
        </nav>
      </div>
    </aside>
  );
}
