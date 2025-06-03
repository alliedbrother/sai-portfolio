"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Lendingkart Finance Limited, Bengaluru, India",
    title: "Data Scientist",
    date: "Jan 2023 - Aug 2023",
    highlights: [
      {
        text: "Data Visualization & Reporting: Built Tableau dashboards integrating Oracle, SAP, and Excel data sources, enabling leadership to make data-driven decisions faster and cutting manual reporting time by 20 hours/month.",
        highlight: ["Data Visualization & Reporting", "Tableau", "Oracle", "SAP", "Excel", "data-driven decisions", "20 hours/month"]
      },
      {
        text: "SQL Optimization: Enhanced SQL queries for city-level sales tracking, decreasing report generation time by over 60% and boosting analysis speed across internal analytics teams.",
        highlight: ["SQL Optimization", "SQL", "60%", "analysis speed"]
      },
      {
        text: "Borrower Segmentation: Applied AWS SageMaker and NLP on customer feedback and engagement data to identify high-value segments, increasing campaign conversions by 25%.",
        highlight: ["Borrower Segmentation", "AWS SageMaker", "NLP", "25%"]
      },
      {
        text: "Mobile UX & Engagement Optimization: Deployed a personalized discount engine with A/B testing on 10K+ users, raising loan completions by 35% and reducing onboarding drop-offs.",
        highlight: ["Mobile UX & Engagement Optimization", "A/B testing", "10K+ users", "35%", "onboarding drop-offs"]
      }
    ]
  },
  {
    company: "Comviva Technologies, Bengaluru, India",
    title: "Data Scientist",
    date: "Aug 2020 - Dec 2022",
    highlights: [
      {
        text: "Revenue & Retention Optimization: Built Recharge Likelihood and Churn models with XGBoost on AWS SageMaker, driving over $160K USD in revenue uplift and retaining 12K+ users per quarter through targeted engagement.",
        highlight: ["Revenue & Retention Optimization", "XGBoost", "AWS SageMaker", "$160K USD", "12K+ users"]
      },
      {
        text: "Workflow Automation & Dashboarding: Automated KPI tracking and model scheduling via Python, SQL, and Power BI, saving 30+ analyst hours/month and streamlining insights delivery across 3 teams.",
        highlight: ["Workflow Automation & Dashboarding", "Python", "SQL", "Power BI", "30+ analyst hours/month", "3 teams"]
      },
      {
        text: "Data Infrastructure Optimization: Redesigned telecom data schema in PostgreSQL, reducing storage by 1.5TB and cutting dashboard load time by 60%, boosting data access for analytics teams.",
        highlight: ["Data Infrastructure Optimization", "PostgreSQL", "1.5TB", "60%"]
      },
      {
        text: "International Usage Segmentation: Used LightGBM to model international user behavior with 75% accuracy, optimizing network provisioning and reducing infra costs by $50k/quarter.",
        highlight: ["International Usage Segmentation", "LightGBM", "75% accuracy", "$50k/quarter"]
      },
      {
        text: "ML Tool Deployment: Launched a no-code ML platform on AWS EC2 with API integrations, cutting reporting time from 3 days to 4 hours and unlocking a new revenue stream through cross-team adoption.",
        highlight: ["ML Tool Deployment", "no-code ML platform", "AWS EC2", "API integrations", "3 days to 4 hours", "new revenue stream"]
      }
    ]
  }
];

const highlightText = (text, highlights) => {
  let result = text;
  highlights.forEach(highlight => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    result = result.replace(regex, '<span class="text-blue-300 font-semibold">$1</span>');
  });
  return result;
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">Professional Experience</h1>
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              className="bg-blue-950/90 rounded-xl p-8 shadow-lg border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">{exp.company}</h2>
                  <h3 className="text-xl font-semibold text-blue-200 mb-1">{exp.title}</h3>
                </div>
                <span className="text-sm font-mono text-blue-400 md:text-right mt-2 md:mt-0">{exp.date}</span>
              </div>
              <div className="space-y-4">
                {exp.highlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="text-blue-100 text-base leading-relaxed font-light pl-4 border-l-2 border-blue-800/50"
                    dangerouslySetInnerHTML={{ __html: highlightText(item.text, item.highlight) }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 