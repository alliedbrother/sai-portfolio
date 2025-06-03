"use client";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-4xl mx-auto bg-blue-950/95 rounded-xl p-8 shadow-md border border-blue-800/30"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Who am I?</h2>
        <p className="text-lg md:text-xl font-normal text-gray-50 drop-shadow-sm">
          I'm a Data Scientist with a proven track record in machine learning, data analytics, and AI solutions. With over three years of experience, I specialize in developing end-to-end ML pipelines, predictive models, and data-driven solutions that drive business value. I thrive on tackling complex challenges and turning data into actionable insights that make a real impact.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMeSection; 