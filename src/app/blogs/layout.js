export const metadata = {
  title: "Blog - Sai Akhil Kogilathota",
  description: "Machine Learning, Deep Learning, NLP, and LLM tutorials and guides",
};

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen pt-20 pb-24 overflow-auto">
      {children}
    </div>
  );
}
