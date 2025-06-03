"use client";
import { FaPython, FaJava, FaDatabase, FaDocker, FaBrain, FaRobot, FaRegCheckCircle, FaCogs } from "react-icons/fa";
import { SiMysql, SiMongodb, SiElasticsearch, SiApachespark, SiHuggingface } from "react-icons/si";
import { GiSkills, GiMagnifyingGlass } from "react-icons/gi";
import { MdOutlineTextFields, MdOutlineScience, MdOutlineFunctions, MdOutlineDataUsage, MdOutlineAssessment, MdOutlineDesignServices, MdOutlineTimeline, MdOutlineAutoGraph, MdOutlinePsychology, MdOutlineEmojiObjects, MdOutlineTopic } from "react-icons/md";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <GiSkills className="text-3xl text-blue-400" />,
    skills: [
      { name: "Python", icon: <FaPython className="text-base text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-base text-red-400" /> },
      { name: "R", icon: <FaRegCheckCircle className="text-base text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-base text-blue-500" /> },
    ],
  },
  {
    category: "Software & Technology",
    icon: <FaCogs className="text-3xl text-blue-400" />,
    skills: [
      { name: "AWS", icon: <FaRegCheckCircle className="text-base text-yellow-400" /> },
      { name: "Sagemaker", icon: <FaRegCheckCircle className="text-base text-green-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-base text-green-500" /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="text-base text-yellow-500" /> },
      { name: "Docker", icon: <FaDocker className="text-base text-blue-400" /> },
      { name: "Kubernetes", icon: <FaRegCheckCircle className="text-base text-blue-400" /> },
      { name: "CI/CD", icon: <FaRegCheckCircle className="text-base text-purple-400" /> },
    ],
  },
  {
    category: "Data Processing",
    icon: <MdOutlineDataUsage className="text-3xl text-blue-400" />,
    skills: [
      { name: "SQL", icon: <FaDatabase className="text-base text-blue-400" /> },
      { name: "Spark", icon: <SiApachespark className="text-base text-orange-400" /> },
      { name: "MS SQL Server", icon: <FaRegCheckCircle className="text-base text-red-400" /> },
      { name: "T-SQL", icon: <FaDatabase className="text-base text-blue-400" /> },
      { name: "NoSQL", icon: <FaDatabase className="text-base text-green-400" /> },
    ],
  },
  {
    category: "Machine Learning Techniques",
    icon: <FaBrain className="text-3xl text-blue-400" />,
    skills: [
      { name: "Regression", icon: <MdOutlineTimeline className="text-base text-pink-400" /> },
      { name: "Classification", icon: <MdOutlineAutoGraph className="text-base text-blue-400" /> },
      { name: "Decision Trees", icon: <FaRegCheckCircle className="text-base text-green-400" /> },
      { name: "Dimension Reduction", icon: <MdOutlineFunctions className="text-base text-purple-400" /> },
      { name: "Deep Learning", icon: <FaBrain className="text-base text-yellow-400" /> },
      { name: "CNN", icon: <FaRobot className="text-base text-blue-400" /> },
    ],
  },
  {
    category: "Natural Language Processing",
    icon: <MdOutlineTextFields className="text-3xl text-blue-400" />,
    skills: [
      { name: "Sentiment Analysis", icon: <MdOutlineEmojiObjects className="text-base text-pink-400" /> },
      { name: "Topic Modeling", icon: <MdOutlineTopic className="text-base text-blue-400" /> },
      { name: "Large Language Models", icon: <FaRobot className="text-base text-purple-400" /> },
      { name: "Fine-tuning", icon: <GiMagnifyingGlass className="text-base text-green-400" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="text-base text-yellow-400" /> },
      { name: "RAG", icon: <FaRegCheckCircle className="text-base text-green-400" /> },
    ],
  },
  {
    category: "Statistical Analysis",
    icon: <MdOutlineScience className="text-3xl text-blue-400" />,
    skills: [
      { name: "Causal Inference", icon: <MdOutlinePsychology className="text-base text-blue-400" /> },
      { name: "Hypothesis Testing", icon: <FaRegCheckCircle className="text-base text-green-400" /> },
      { name: "Chi-Square", icon: <FaRegCheckCircle className="text-base text-yellow-400" /> },
      { name: "T-test", icon: <FaRegCheckCircle className="text-base text-blue-400" /> },
      { name: "A/B Testing", icon: <MdOutlineAssessment className="text-base text-pink-400" /> },
      { name: "Experiment Design", icon: <MdOutlineDesignServices className="text-base text-purple-400" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 max-h-[90vh] overflow-y-auto py-8 hide-scrollbar">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent sticky top-0 bg-blue-950/90 py-4">Skills & Technologies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative group"
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-950/90 to-blue-900/90 rounded-xl backdrop-blur-sm border border-blue-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:border-blue-500/50 transition-all duration-300"></div>
              
              {/* Card content */}
              <div className="relative p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-blue-800/80 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">{category.category}</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/80 backdrop-blur-sm border border-blue-600/50 text-sm font-medium text-white hover:bg-blue-700/80 hover:border-blue-500/50 transition-all duration-300 cursor-default shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

const styles = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`; 