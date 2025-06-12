"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import hallucImg from "./images/halluciantion.png";
import stocksImg from "./images/stocks.png";
import trialImg from "./images/trial.png";
import revizeImg from "./images/stealth.png";
import newsImg from "./images/stealth.png";
import kathaImg from "./images/stealth.png";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Hallu-Detect in VLMs",
      tags: ["EMNLP 2025", "VLMs", " LLaVa", "Probing"],
      description: "A Novel Probing Framework for Hallucination Detection in Multimodal Models without single-token generation",
      fullDescription:
        "We introduce a lightweight probing framework that predicts object hallucination in VLM image captioning by analyzing hidden-state embeddings before text generation—achieving strong results with a mean-squared error of 0.0455 and ROC-AUC of 0.75 on LLaVA-1.5, demonstrating that nearly all hallucination-predictive signal is being captured.",
      image: hallucImg,
      techStack: [ "Python", "EMNLP 2025", "VLMs", "Pytorch", "LLaVa", "Paligemma", "Probing"],
      repoLink: "https://github.com/alliedbrother/Thesis_LLAVA"
    },
    {
      id: 2,
      title: "Buy-Sell recommender",
      tags: ["Transformers","NLP","Time-Series"],
      description: "Buy-Sell stock recommendation system using Galformer and NLP",
      fullDescription:
        "A novel architecture that incorporates Galformer a specialized transformer trained for stock systems and NLP to analyze particular stocks sentiments to recommend the buy/sell option, given purchase prize and stock quantity. This results is 15% better predictions than a baseline LSTM model.",
      image: stocksImg,
      techStack: ["Python","Pytorch","Galformer","Transformers","NLP", "LSTMs", "Time-Series"],
      repoLink: "https://github.com/alliedbrother/Galformer-Portfolio-Recommender"
    },
    {
      id: 3,
      title: "TrialMatch",
      tags: ["JavaScript", "React", "MySQL", "RecSys"],
      description: "A platform for connecting patients with clinical trials.",
      fullDescription:
        "TrialMatch is a platform designed to simplify and accelerate clinical trial recruitment using a swipe-based matching system alongside a recommendations system. TrialMatch connects potential clinical trial participants with organizations conducting medical research. This approach improves user experience, enhances recruitment efficiency, and enables targeted participant selection.",
      image: trialImg,
      techStack: ["JavaScript", "React", "MySQL", "Python","API","Recommendation System"],
      repoLink: "https://github.com/alliedbrother/Final_clinphen-"
    },
    {
      id: 4,
      title: "Revize",
      tags: ["React", "Django", "SQL", "API"],
      description: "A web application designed to help users learn effectively using the spaced repetition method. ",
      fullDescription:
        "A web application designed to help users learn effectively using the spaced repetition method. The app allows users to: 1. Add study topics with customizable revision schedules. 2. View and manage daily revision tasks. 3. Track progress and postpone revisions as needed.",
      image: revizeImg,
      techStack: ["React", "Django", "SQL", "API", "Python", "JavaScript"],
      repoLink: "https://github.com/alliedbrother/revize"
    },
    {
      id: 5,
      title: "AI News App",
      tags: ["LLMs", "API","Kafka", "Multilingual"],
      description: "A news application that uses LLMs to summarize news articles and deliver them to users in their preferred language using TTS",
      fullDescription:
        "A news application that uses LLMs to summarize news articles and deliver them to users in their preferred language using TTS",
      image: newsImg,
      techStack: ["LLMs","Kafka","Python","API","Summarization", "Multilingual"],
      repoLink: "https://github.com/alliedbrother/AI_NEWS_APP"
    },
    {
      id: 6,
      title: "Katha Vaani",
      tags: ["RAG", "LLMs", "API", "STT"],
      description: "A RAG application that uses LLMs to answer questions of users with Indian Mythology as grounding knowledge",
      fullDescription:
        "A RAG application that uses LLMs to answer questions of users with Indian Mythology as grounding knowledge. It also gives stories to users based on their age preferences",
      image: kathaImg,
      techStack: ["RAG", "LLMs", "API", "STT", "Multilingual", "Story Generation"],
      repoLink: "https://github.com/alliedbrother/RAG_Mythology"
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);
    if (currentIndex === -1) return null;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
  };

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-h-[90vh] overflow-y-auto py-8 hide-scrollbar">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent sticky top-0 bg-blue-950/90 py-4">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              onClick={() => handleProjectClick(project.id)}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative group text-left min-h-[280px] hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-950/90 to-blue-900/90 rounded-2xl backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:border-blue-500/50 transition-all duration-300"></div>
              
              {/* Card content */}
              <div className="relative p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors flex-grow">
                    {project.title}
                  </h3>
                  <a 
                    href={project.repoLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center bg-white/80 hover:bg-white transition-colors duration-300 text-black rounded-full p-3 ml-3"
                  >
                    <Github size={24} color="#000" />
                    <span className="sr-only">GitHub Link</span>
                  </a>
                </div>
                <p className="text-lg text-gray-200 mb-6 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-base rounded-full bg-blue-800/80 backdrop-blur-sm border border-blue-600/50 text-white hover:bg-blue-700/80 hover:border-blue-500/50 transition-all duration-300 shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

const styles = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;

export default ProjectSection;
