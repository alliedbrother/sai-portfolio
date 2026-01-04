"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  return (
    <aside className="w-64 flex-shrink-0 hidden xl:block">
      <div className="sticky top-24 p-4">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
            On This Page
          </h3>
          <button
            onClick={scrollToTop}
            className="p-1 rounded hover:bg-slate-700/50 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
            {headings.map((heading, index) => (
              <button
                key={`${heading.id}-${index}`}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 border-l-2 ${
                  heading.level === 3 ? "pl-4" : "pl-3"
                } ${
                  activeId === heading.id
                    ? "border-blue-400 text-blue-300 bg-blue-900/20"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600"
                }`}
              >
                <span className="line-clamp-2 leading-snug">
                  {heading.level === 3 && <span className="text-slate-500 mr-1">&rsaquo;</span>}
                  {heading.text}
                </span>
              </button>
            ))}
        </nav>
      </div>
    </aside>
  );
}
