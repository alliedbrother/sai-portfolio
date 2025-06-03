"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Summarization Tool",
      tags: ["AWS", "React", "Cloudflare"],
      description: "A tool that summarizes long articles into short paragraphs using AI.",
      fullDescription:
        "This project uses AWS Lambda functions to process text data and return a summarized version of the content. The front-end is built with React and hosted on Cloudflare Pages.",
      image: "/summarization.png",
      techStack: ["React", "AWS", "Cloudflare", "TailwindCSS", "NodeJS"],
    },
    {
      id: 2,
      title: "Newsletter App",
      tags: ["NextJs", "Cloudflare", "PayloadCMS"],
      description: "A newsletter app that sends daily updates to subscribers.",
      fullDescription:
        "This project uses NextJS to build the front-end and PayloadCMS to manage content. The app is hosted on Cloudflare Workers.",
      image: "/proj.png",
      techStack: ["NextJS", "Cloudflare", "PayloadCMS", "TailwindCSS", "NodeJS", "TypeScript"],
    },
    {
      id: 3,
      title: "Feedback Platform",
      tags: ["TS", "Postgres", "DrizzleORM"],
      description: "A platform for collecting feedback from users.",
      fullDescription:
        "This project uses TypeScript and Postgres to store user feedback. DrizzleORM is used to manage the database schema.",
      image: "/feedback.png",
      techStack: ["TypeScript", "Postgres", "DrizzleORM", "TailwindCSS", "NodeJS", "Stripe API"],
    },
    {
      id: 4,
      title: "AI Quiz Generator",
      tags: ["TS", "NextJS", "DrizzleORM"],
      description: "A quiz generator that uses AI to generate questions.",
      fullDescription:
        "This project uses TypeScript and NextJS to build the front-end. Langchain is used to manage AI requests and responses.",
      image: "/quiz.png",
      techStack: ["TypeScript", "NextJS", "OpenAI", "TailwindCSS", "NodeJS", "Stripe API"],
    },
    {
      id: 5,
      title: "Form Builder Tool",
      tags: ["NextJS", "React", "TailwindCSS", "Prisma"],
      description: "A tool that allows users to create custom forms.",
      fullDescription:
        "This project uses NextJS and React to build the front-end. Prisma is used to manage the database schema.",
      image: "/form.png",
      techStack: ["NextJS", "React", "Prisma", "TailwindCSS", "NodeJS", "Stripe API"],
    },
    {
      id: 6,
      title: "Blog Website",
      tags: ["MDX", "NextJS", "TailwindCSS", "Framer Motion"],
      description: "A blog website with animated page transitions.",
      fullDescription:
        "This project uses MDX and NextJS to build the front-end. Framer Motion is used to create page transitions.",
      image: "/blog.png",
      techStack: ["MDX", "NextJS", "Framer Motion", "TailwindCSS", "NodeJS", "Stripe API"],
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
    <section className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 max-h-[90vh] overflow-y-auto py-8 hide-scrollbar">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent sticky top-0 bg-blue-950/90 py-4">Featured Projects</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              onClick={() => handleProjectClick(project.id)}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative group text-left"
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-950/90 to-blue-900/90 rounded-xl backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:border-blue-500/50 transition-all duration-300"></div>
              
              {/* Card content */}
              <div className="relative p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-blue-800/80 backdrop-blur-sm border border-blue-600/50 text-white hover:bg-blue-700/80 hover:border-blue-500/50 transition-all duration-300 shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
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
