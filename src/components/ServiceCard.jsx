import { motion } from "framer-motion";

export default function ServiceCard({ service, index = 0, detailed = false, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-line bg-surface p-7 sm:p-8 transition-all duration-300 hover:border-[#1B4EF5]/40 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(27,78,245,0.35)]"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-mute">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="font-display text-xl font-semibold text-paper mb-2.5">
        {service.name}
      </h3>
      <p className="text-sm text-mute leading-relaxed">{service.short}</p>

      {detailed && (
        <>
          <p className="text-sm text-mute/90 leading-relaxed mt-4 pt-4 border-t border-line">
            {service.detail}
          </p>
          <ul className="mt-5 space-y-2.5">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-paper/90">
                <span className="mt-0.5 shrink-0 text-[#1B4EF5]">•</span>
                {b}
              </li>
            ))}
          </ul>
        </>
      )}
    </motion.div>
  );
}
