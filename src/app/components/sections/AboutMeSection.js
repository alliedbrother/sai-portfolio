"use client";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  const points = [
    {
      text: "Data Scientist & ML Engineer with expertise in building intelligent systems that drive real business impact",
      delay: 0.4
    },
    {
      text: "Specialized in end-to-end ML pipelines, from data processing to production deployment",
      delay: 0.5
    },
    {
      text: "3+ years of experience transforming complex data challenges into actionable insights",
      delay: 0.6
    },
    {
      text: "Passionate about solving intricate problems with innovative AI solutions",
      delay: 0.7
    }
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      {/* Background glow effect */}
      <div className="absolute w-full max-w-5xl h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative max-w-5xl w-11/12 mx-auto"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        
        {/* Main content box */}
        <div className="relative bg-gradient-to-br from-blue-900/90 via-blue-950/95 to-purple-900/90 rounded-2xl p-10 md:p-12 shadow-2xl border border-blue-700/30 backdrop-blur-sm">
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
              Who am I?
            </motion.h2>
            
            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: point.delay }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-4 rounded-full bg-blue-400"></div>
                  <p className="text-xl md:text-2xl font-light text-blue-50/90 leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection; 