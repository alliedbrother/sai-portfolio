"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myPic from "../images/my_pic.jpeg";

const IntroSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      {/* Background glow effect */}
      <div className="absolute w-full max-w-5xl h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative max-w-5xl w-11/12 mx-auto"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        
        {/* Main content box */}
        <div className="relative bg-gradient-to-br from-blue-900/90 via-blue-950/95 to-blue-900/90 rounded-2xl p-10 md:p-12 shadow-2xl border border-blue-700/30 backdrop-blur-sm">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 mix-blend-overlay">
            <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          </div>
          
          {/* Content + Image Row */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Text Block */}
            <div className="flex-1">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-3"
              >
                Hi there! <motion.span
                  initial={{ rotate: -30 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-3xl md:text-4xl inline-block"
                >
                  👋
                </motion.span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-light text-blue-50/90 leading-relaxed"
              >
                Welcome to my digital self! I'm{" "}
                <span className="font-medium text-white">Sai Akhil</span>, a Data 
                Scientist and ML Engineer passionate about transforming complex data 
                into actionable insights and building intelligent systems that make 
                a difference.
              </motion.p>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex-shrink-0 rounded-xl overflow-hidden border-4 border-blue-700/50 shadow-xl"
            >
              <Image
                src={myPic}
                alt="Sai Akhil"
                width={256}
                height={160}
                className="object-cover w-[256px] h-[160px] md:w-[256px] md:h-[256px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection; 