import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-blue-950/75 backdrop-blur-md flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Card background with glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-900/30 to-purple-900/20 rounded-xl backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"></div>
        
        {/* Card content */}
        <div className="relative p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-300">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-blue-300 hover:text-blue-200 rounded-full p-2 bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 hover:bg-blue-800/50 hover:border-blue-400/30 transition-all duration-300 shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-6 md:w-1/2">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Overview</h3>
                <p className="text-blue-100 font-light">{project.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Details</h3>
                <p className="text-blue-100 font-light">{project.fullDescription}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 text-blue-300 hover:bg-blue-800/50 hover:border-blue-400/30 transition-all duration-300 shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto md:w-1/2 rounded-lg overflow-hidden border border-blue-400/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 max-w-4xl left-1/2 -translate-x-1/2 pointer-events-none">
            <button
              onClick={onPrev}
              className="bg-blue-900/40 backdrop-blur-sm rounded-full p-2 hover:bg-blue-800/50 border border-blue-400/20 hover:border-blue-400/30 transition-all duration-300 text-blue-300 hover:text-blue-200 pointer-events-auto shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="bg-blue-900/40 backdrop-blur-sm rounded-full p-2 hover:bg-blue-800/50 border border-blue-400/20 hover:border-blue-400/30 transition-all duration-300 text-blue-300 hover:text-blue-200 pointer-events-auto shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
