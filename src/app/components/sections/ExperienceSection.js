"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    year: "Aug 2024 – May 2025",
    role: "Research Assistant",
    company: "Stony Brook University, NY, USA",
    bullets: [
      "Researched multimodal models to analyze and mitigate hallucinations in vision-language systems.",
      "First-authored a paper on multimodal hallucination submitted to EMNLP 2025.",
      "Developed a RAG application to extract patient information and support clinical diagnosis."
    ]
  },
  {
    id: 2,
    year: "Jan 2023 – Aug 2023",
    role: "Data Scientist",
    company: "Lendingkart Finance, Bengaluru, India",
    bullets: [
      "Fine-tuned BERT-Base on internal docs to power a company-wide search tool.",
      "Performed sentiment analytics on sales calls, extracting reasons for drop-off and actionable insights.",
      "Built Tableau dashboards that cut manual reporting 20 h/mo.",
      "Optimized SQL reports → 60 % faster; K-Means borrower segmentation → +25 % conversions.",
      "Launched personalized discount engine (A/B on 10 k users) → +35 % loan completions."
    ]
  },
  {
    id: 3,
    year: "Aug 2020 – Dec 2022",
    role: "Data Scientist",
    company: "Comviva Technologies, Bengaluru, India",
    bullets: [
      "Recharge Likelihood & Churn models (+$160 k revenue, 12 k users retained/qtr).",
      "Automated KPI pipelines (Python / SQL / Power BI) saving 30 h/mo.",
      "Redesigned Postgres schema → −20 % storage, −60 % dashboard load time.",
      "Behavior segmentation with LightGBM → 75 % accuracy, $50 k infra savings/qtr.",
      "Shipped no-code ML platform & customer-support chatbot (Rasa) cutting manual routing 6 h/wk."
    ]
  }
];

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <section id="experience" className="min-h-screen py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative bg-gradient-to-br from-blue-900/90 via-blue-950/95 to-indigo-900/90 rounded-2xl p-10 md:p-12 shadow-2xl border border-blue-700/40 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Professional Journey</h2>

          {/* small cards row */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-4 justify-center">
            {experiences.map((exp) => (
              <motion.button
                key={exp.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveId(exp.id)}
                className={`flex-1 md:w-auto bg-blue-800/60 backdrop-blur-md border border-blue-600/40 rounded-xl px-6 py-4 shadow-lg text-left transition-colors ${activeId===exp.id?"border-blue-400" :""}`}
              >
                <p className="text-sm text-blue-300 mb-1">{exp.year}</p>
                <h3 className="text-lg font-semibold text-white leading-snug">{exp.role}</h3>
                <p className="text-blue-200 text-sm">{exp.company}</p>
              </motion.button>
            ))}
          </div>

          {/* expanded content box */}
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="mt-10 bg-blue-900/80 border border-blue-600/40 rounded-xl p-6 md:p-8 shadow-xl h-72 md:h-80 overflow-y-auto"
              >
                {experiences
                  .filter((e) => e.id === activeId)
                  .map((exp) => (
                    <div key={exp.id}>
                      <h4 className="text-2xl font-semibold text-white mb-4">{exp.role} @ {exp.company}</h4>
                      <ul className="list-disc list-inside space-y-2 text-blue-100 text-sm md:text-base">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 