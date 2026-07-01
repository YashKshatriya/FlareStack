import { Eyebrow, FadeUp } from "../components/Section";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";
import FlareTrail from "../components/FlareTrail";
import Hero from "./Hero";
import StatsStrip from "./StatsStrip";
import { services, portfolio, testimonials } from "../lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />

      {/* SERVICES PREVIEW */}
      <section className="relative py-28 lg:py-32">
        <div className="container-flare">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <FadeUp>
                <Eyebrow>What we do</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 max-w-xl">
                  Every growth lever, run by one team.
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.12}>
              <p className="text-mute max-w-sm">
                From the technology underneath your business to the campaigns
                that bring customers in — we cover the full stack of digital
                growth.
              </p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          <FadeUp delay={0.1} className="mt-12 text-center">
            <Button to="/services" variant="ghost">
              View all services in detail
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="relative py-28 lg:py-32 border-t border-line bg-surface/30">
        <div className="container-flare">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeUp>
              <Eyebrow>Selected work</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
                Results our clients can point to.
              </h2>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <PortfolioCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 lg:py-32 overflow-hidden">
        <FlareTrail variant="thread" className="absolute top-10 left-0 w-full h-20 opacity-30" />
        <div className="container-flare relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeUp>
              <Eyebrow>Client reviews</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
                Don't take our word for it.
              </h2>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
