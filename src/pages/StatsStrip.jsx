import { FadeUp } from "../components/Section";
import { stats } from "../lib/data";

export default function StatsStrip() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="container-flare grid grid-cols-2 sm:grid-cols-4 gap-8 py-12">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient-flare">
              {s.value}
            </p>
            <p className="text-xs sm:text-sm text-mute mt-2">{s.label}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
