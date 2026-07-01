import { motion } from "framer-motion";
import { Eyebrow } from "./Section";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-44 lg:pb-24 overflow-hidden border-b border-line">
      <div className="absolute -top-32 right-10 h-[380px] w-[380px] rounded-full bg-[#1B4EF5]/15 blur-[110px]" />
      <div className="container-flare relative max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-5 leading-[1.05]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-mute text-lg mt-6 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
