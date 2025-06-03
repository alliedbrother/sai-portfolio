"use client";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/95 to-blue-800/90 rounded-xl p-8 shadow-lg border border-blue-700/30"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          Hi there! <span className="text-2xl">👋</span>
        </h2>
        <p className="text-lg md:text-xl font-normal text-gray-50 drop-shadow-sm">
          Welcome to my digital workspace! I'm <span className="font-medium text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Sai Akhil</span>, a Data Scientist and ML Engineer passionate about transforming complex data into actionable insights and building intelligent systems that make a difference.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroSection; 