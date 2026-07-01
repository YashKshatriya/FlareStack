import { motion } from "framer-motion";

/**
 * FlareTrail — the site's signature element.
 * A hand-drawn comet trajectory that ignites on load/scroll: the path draws
 * itself in, then a glowing spark travels along it on loop. Used in the hero
 * at full scale, and as a thin connective thread between sections elsewhere.
 */
export default function FlareTrail({
  className = "",
  variant = "hero",
  delay = 0,
}) {
  const paths = {
    hero: "M2,180 C120,40 220,10 340,60 C440,102 470,180 600,150 C720,122 760,40 880,55",
    thread: "M0,40 C150,90 300,0 450,50 C600,100 750,10 900,55 C1000,90 1100,30 1200,45",
  };
  const d = paths[variant] || paths.hero;
  const viewBox = variant === "hero" ? "0 0 900 220" : "0 0 1200 100";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`flareGrad-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B4EF5" stopOpacity="0" />
          <stop offset="15%" stopColor="#1B4EF5" />
          <stop offset="100%" stopColor="#3874FF" />
        </linearGradient>
        <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={variant === "hero" ? "4" : "2"} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d={d}
        stroke={`url(#flareGrad-${variant})`}
        strokeWidth={variant === "hero" ? 2.5 : 1.5}
        strokeLinecap="round"
        filter={`url(#glow-${variant})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* travelling spark */}
      <circle r={variant === "hero" ? 5 : 3} fill="#3874FF" filter={`url(#glow-${variant})`}>
        <animateMotion
          dur={variant === "hero" ? "5s" : "7s"}
          repeatCount="indefinite"
          path={d}
          begin={`${delay + 1.8}s`}
        />
      </circle>
    </svg>
  );
}
