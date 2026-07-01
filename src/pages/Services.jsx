import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { Eyebrow, FadeUp } from "../components/Section";
import { services } from "../lib/data";
import { Search, Heart, PlayCircle, Briefcase } from "lucide-react";

const adPlatforms = [
  { icon: Search, name: "Google Ads", desc: "Search, Display & Performance Max" },
  { icon: Heart, name: "Meta Ads", desc: "Facebook & Instagram campaigns" },
  { icon: PlayCircle, name: "YouTube Ads", desc: "Video & connected TV campaigns" },
  { icon: Briefcase, name: "LinkedIn Ads", desc: "B2B lead generation & ABM" },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Everything your business needs to grow, in one place."
        description="We don't hand you off between specialists. One Flare Stack team plans, builds, and runs every layer of your digital growth — technology, marketing, and advertising — so nothing falls through the cracks."
      />

      <section className="py-24 lg:py-28">
        <div className="container-flare space-y-8">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} detailed id={s.slug} />
          ))}
        </div>
      </section>

      {/* Ad platforms grid */}
      <section className="py-24 lg:py-28 border-t border-line bg-surface/30">
        <div className="container-flare">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeUp>
              <Eyebrow>Paid advertising, everywhere it matters</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
                We run campaigns across every major platform.
              </h2>
            </FadeUp>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {adPlatforms.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.06} className="rounded-2xl border border-line bg-surface p-7 text-center">
                <p.icon size={26} className="text-[#3874FF] mx-auto mb-4" />
                <h3 className="font-display text-base font-semibold mb-1.5">{p.name}</h3>
                <p className="text-xs text-mute">{p.desc}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3} className="text-center text-sm text-mute mt-8">
            ...plus other social advertising platforms, planned around where
            your audience actually spends time.
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
