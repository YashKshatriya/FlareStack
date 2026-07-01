import PageHeader from "../components/PageHeader";
import { Eyebrow, FadeUp } from "../components/Section";
import CTASection from "../components/CTASection";
import StatsStrip from "./StatsStrip";

const values = [
  {
    title: "Honesty over hype",
    text: "We tell you what's actually working and what isn't — even when that means recommending less, not more.",
  },
  {
    title: "Built to compound",
    text: "We design systems and campaigns that get more effective over time, not one-off projects that decay.",
  },
  {
    title: "One team, your team",
    text: "Engineers, marketers and strategists work as a single unit around your goals — not in separate silos.",
  },
  {
    title: "Obsessed with outcomes",
    text: "Every deliverable is judged by the business result it produces, not how it looks in a deck.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Flare Stack"
        title="A growth partner that works like part of your team."
        description="Flare Stack was built on a simple frustration: most agencies sell pieces — a website, a few ads, a report — when growing businesses actually need a connected system. So we built one team that does it all, properly."
      />

      <StatsStrip />

      {/* Story */}
      <section className="py-24 lg:py-28">
        <div className="container-flare grid lg:grid-cols-2 gap-14 items-start">
          <FadeUp>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-4 leading-tight">
              We started as engineers tired of watching good products fail at marketing.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="space-y-5 text-mute leading-relaxed">
            <p>
              Flare Stack began with a small team of engineers and marketers who kept
              seeing the same pattern: businesses with strong products and
              outdated websites, brittle systems, or marketing that never quite
              connected to revenue.
            </p>
            <p>
              Rather than specialize in one slice of the problem, we built a
              team that could own the whole thing — from the cloud
              infrastructure underneath a product, to the AI tools that
              automate its operations, to the campaigns that bring customers
              through the door.
            </p>
            <p>
              Today Flare Stack works with logistics companies, healthcare
              providers, retailers and fast-moving startups — all on the same
              promise: clear thinking, honest reporting, and work that's
              measured by results, not hours billed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 lg:py-28 border-t border-line bg-surface/30">
        <div className="container-flare grid sm:grid-cols-2 gap-6">
          <FadeUp className="rounded-2xl border border-line bg-surface p-9">
            <h3 className="font-display text-2xl font-semibold mb-3">Our mission</h3>
            <p className="text-mute leading-relaxed">
              To give growing businesses the same technology and marketing
              firepower as large enterprises — without the bureaucracy, the
              jargon, or the inflated retainers.
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="rounded-2xl border border-line bg-surface p-9">
            <h3 className="font-display text-2xl font-semibold mb-3">Our vision</h3>
            <p className="text-mute leading-relaxed">
              A world where every ambitious business has direct access to the
              digital infrastructure and intelligent automation it needs to
              compete, regardless of its size today.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-28">
        <div className="container-flare">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeUp>
              <Eyebrow>Why clients choose us</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
                What working with Flare Stack actually feels like.
              </h2>
            </FadeUp>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.06} className="rounded-2xl border border-line bg-surface p-7">
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-mute leading-relaxed">{v.text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
