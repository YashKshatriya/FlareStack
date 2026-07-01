import { motion } from "framer-motion";

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span className="h-[5px] w-[5px] rounded-full bg-[#1B4EF5]" />
      {children}
    </span>
  );
}

export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
