"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="h-screen w-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-xl w-full mx-auto bg-gradient-to-r from-blue-900/95 to-blue-800/90 rounded-2xl p-10 shadow-2xl border border-blue-700/40 backdrop-blur-sm text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-white">Get in Touch</h2>

        <div className="space-y-6 text-left">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-blue-400 w-6 h-6" />
            <a href="mailto:saikogilathota@gmail.com" className="text-xl text-blue-100 hover:text-blue-300 transition-colors">
              saikogilathota@gmail.com
            </a>
          </div>

          {/* Mobile / iMessage */}
          <div className="flex items-center gap-4">
            <Phone className="text-blue-400 w-6 h-6" />
            <span className="text-xl text-blue-100">+1&nbsp;(934)&nbsp;799&nbsp;0867</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <MessageCircle className="text-green-400 w-6 h-6" />
            <a href="https://wa.me/919901653224" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-100 hover:text-blue-300 transition-colors">
              +91&nbsp;99016&nbsp;53224 (WhatsApp)
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 