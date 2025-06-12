import Image from "next/image";
import { X, ChevronRight, ChevronLeft, Github } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const modalRef = useRef();
  const [showFullImage, setShowFullImage] = useState(false);

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
      className="fixed inset-0 bg-blue-950/80 backdrop-blur-md flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      {/* Navigation Buttons - Positioned closer to content */}
      <button
        onClick={onPrev}
        className="absolute left-[calc(50%-42rem)] md:left-[calc(50%-36rem)] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:border-white/30 transition-all duration-300 text-white hover:text-blue-200 shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-[calc(50%-42rem)] md:right-[calc(50%-36rem)] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:border-white/30 transition-all duration-300 text-white hover:text-blue-200 shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-w-5xl w-11/12 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Card background with improved glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-900/20 to-purple-900/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"></div>
        
        {/* Card content */}
        <div className="relative p-8 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
              <a 
                href={project.repoLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 hover:bg-white transition-all duration-300 rounded-full py-2 px-5 text-black shadow-lg"
              >
                <Github size={22} color="#000" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white rounded-full p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left column - Project details */}
            <div className="space-y-8 lg:w-1/2">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-white/90 text-lg leading-relaxed">{project.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Details</h3>
                <p className="text-white/90 text-lg leading-relaxed">{project.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-base rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Project image */}
            <div
              className="relative h-80 lg:h-auto lg:w-1/2 rounded-xl overflow-hidden border border-white/20 shadow-2xl cursor-zoom-in"
              onClick={() => setShowFullImage(true)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Image Overlay */}
      {showFullImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-60"
          onClick={() => setShowFullImage(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-blue-200 p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/20"
            aria-label="Close full image"
            onClick={(e) => {
              e.stopPropagation();
              setShowFullImage(false);
            }}
          >
            <X size={24} />
          </button>
          <div className="relative w-11/12 h-5/6">
            <Image src={project.image} alt={project.title} fill className="object-contain rounded-lg" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
