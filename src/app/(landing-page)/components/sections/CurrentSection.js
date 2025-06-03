"use client";
import { motion } from "framer-motion";

const CurrentSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/95 to-blue-800/90 rounded-xl p-8 shadow-md border border-blue-700/30"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">What am I up to now?</h2>
        <p className="text-lg md:text-xl font-normal text-gray-50 drop-shadow-sm">
          I'm a Data Science grad student at Stony Brook, specializing in advanced ML, NLP, and scalable AI systems. My research is all about multilingual models and creative uses of voice and text tech, especially where LLMs meet real business needs. Outside the lab, I'm a curious problem solver and always eager to share ideas with the tech community.
        </p>
      </motion.div>
    </section>
  );
};

export default CurrentSection; 