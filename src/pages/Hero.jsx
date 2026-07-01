import { motion } from "framer-motion";
import Button from "../components/Button";
import FlareTrail from "../components/FlareTrail";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#1B4EF5]/20 blur-[120px]" />
      <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-[#5996FF]/15 blur-[120px]" />
      <div className="absolute inset-0 grain" />

      <div className="container-flare relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 mb-8"
          >
            <span className="text-[#1B4EF5]">🔥</span>
            <span className="font-mono text-xs text-mute tracking-wide">
              Digital growth, engineered
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold tracking-tight text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.03]"
          >
            We turn growing
            <br />
            businesses into{" "}
            <span className="text-gradient-flare">market leaders.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-mute text-lg leading-relaxed mt-7 max-w-lg"
          >
            Flare Stack is a digital growth partner — IT, web development, AI
            automation, marketing and paid advertising under one roof, built
            to get you from where you are to where you're going.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
          >
            <Button to="/contact" className="!px-7 !py-3.5 text-[15px]">
              Get a free consultation
            </Button>
            <Button to="/services" variant="ghost" className="!px-7 !py-3.5 text-[15px]">
              Explore our services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-7 mt-12 text-mute"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#5b6eff]">🛡️</span>
              <span className="text-xs">Trusted by 120+ businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3874FF]">⚡</span>
              <span className="text-xs">24/7 support, fast response</span>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <FlareTrail variant="hero" className="w-full h-[260px]" delay={0.4} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-72 rounded-2xl border border-line bg-surface/80 backdrop-blur-sm p-6 shadow-2xl"
          >
            <p className="eyebrow mb-3">Live impact</p>
            <p className="font-display text-3xl font-semibold text-paper">+212%</p>
            <p className="text-xs text-mute mt-1 mb-4">qualified leads in 5 months</p>
            <div className="h-2 w-full rounded-full bg-line overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "84%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-[#1B4EF5] to-[#3874FF]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
