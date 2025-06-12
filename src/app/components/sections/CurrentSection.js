"use client";
import { motion } from "framer-motion";

const CurrentSection = () => {
  const currentFocus = [
    {
      category: "Academic Focus",
      points: [
        "Data Science Graduate Student at Stony Brook University",
        "Specializing in Advanced Machine Learning & Natural Language Processing",
        "Researching multimodal models and their real-world applications"
      ],
      delay: 0.4
    },
    {
      category: "Research Interests",
      points: [
        "Multimodal models and the cause of Hallucinations - EMNLP 2025 Submission",
        "Developing scalable AI systems for enterprise solutions",
        "Exploring creative applications of LLMs in business contexts",
        "Investigating voice technology and text analysis innovations"
      ],
      delay: 0.6
    },
    {
      category: "Current Projects",
      points: [
        "Building next-gen News Application with AI at its core",
        "Contributing to open-source AI/ML projects",
        "Mentoring and sharing knowledge with the tech community"
      ],
      delay: 0.8
    }
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      {/* Background glow effect */}
      <div className="absolute w-full max-w-5xl h-96 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative max-w-5xl w-11/12 mx-auto"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
        
        {/* Main content box */}
        <div className="relative bg-gradient-to-br from-blue-900/90 via-blue-950/95 to-violet-900/90 rounded-2xl p-10 md:p-12 shadow-2xl border border-blue-700/30 backdrop-blur-sm">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 mix-blend-overlay">
            <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          </div>
          
          {/* Content */}
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Current Focus
            </motion.h2>
            
            <div className="space-y-8">
              {currentFocus.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: section.delay }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-indigo-300">
                    {section.category}
                  </h3>
                  <div className="space-y-3 ml-4">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-indigo-400"></div>
                        <p className="text-xl md:text-2xl font-light text-blue-50/90 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CurrentSection; 