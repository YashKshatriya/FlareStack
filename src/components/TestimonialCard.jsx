import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-line bg-surface p-7 sm:p-8 flex flex-col h-full"
    >
      <Quote size={26} className="text-[#1B4EF5]/70 mb-4" />
      <p className="text-paper/90 text-[15px] leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>
      <div className="mt-6 pt-5 border-t border-line flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1B4EF5]/30 to-[#3874FF]/30 grid place-items-center font-display text-sm font-semibold text-paper">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-paper">{testimonial.name}</p>
          <p className="text-xs text-mute">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
