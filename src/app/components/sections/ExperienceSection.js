"use client";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Lendingkart Finance Limited",
      points: [
        "Engineered ML solutions improving borrower engagement by 40%",
        "Developed risk assessment models with 85% accuracy",
        "Led a team of 3 data scientists in implementing automated ML pipelines"
      ],
      delay: 0.4
    },
    {
      company: "Comviva Technologies",
      points: [
        "Spearheaded user retention analytics increasing customer retention by 25%",
        "Built automated reporting systems saving 20+ hours weekly",
        "Implemented predictive models for customer behavior analysis"
      ],
      delay: 0.6
    }
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      {/* Background glow effect */}
      <div className="absolute w-full max-w-5xl h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative max-w-5xl w-11/12 mx-auto"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        
        {/* Main content box */}
        <div className="relative bg-gradient-to-br from-blue-900/90 via-blue-950/95 to-indigo-900/90 rounded-2xl p-10 md:p-12 shadow-2xl border border-blue-700/30 backdrop-blur-sm">
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
              Professional Journey
            </motion.h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: exp.delay }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-300">
                    {exp.company}
                  </h3>
                  <div className="space-y-3 ml-4">
                    {exp.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-blue-400"></div>
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

export default ExperienceSection; 