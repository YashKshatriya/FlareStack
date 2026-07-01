import { motion } from "framer-motion";

export default function PortfolioCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
        <div className="absolute inset-0 grain mix-blend-overlay" />
        <div className="absolute inset-0 bg-void/30 group-hover:bg-void/10 transition-colors duration-500" />
        <span className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-widest text-void/80 bg-paper/85 px-2.5 py-1 rounded-full">
          {project.tag}
        </span>
      </div>
      <div className="p-6">
        <p className="eyebrow mb-2">{project.category}</p>
        <h3 className="font-display text-lg font-semibold text-paper mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-mute leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
}
