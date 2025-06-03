"use client";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-4xl mx-auto bg-blue-900/95 rounded-xl p-8 shadow-md border border-blue-700/30"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">What did I do before?</h2>
        <p className="text-lg md:text-xl font-normal text-gray-50 drop-shadow-sm">
          At <span className="font-medium text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Lendingkart Finance Limited</span>, I engineered ML solutions that enhanced borrower engagement and risk assessment. Prior to that, at <span className="font-medium text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Comviva Technologies</span>, I led initiatives in user retention analytics and automated reporting systems, achieving significant improvements in customer engagement metrics. I consistently focused on delivering measurable business impact through data-driven and innovative ML solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default ExperienceSection; 