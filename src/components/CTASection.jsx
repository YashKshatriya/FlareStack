import { FadeUp, Eyebrow } from "./Section";
import Button from "./Button";
import FlareTrail from "./FlareTrail";

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 to-void" />
      <FlareTrail
        variant="thread"
        className="absolute top-0 left-0 w-full h-24 opacity-40"
      />
      <div className="container-flare relative text-center max-w-3xl mx-auto">
        <FadeUp>
          <Eyebrow>Let's talk</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-5 leading-[1.05]">
            Ready to ignite your{" "}
            <span className="text-gradient-flare">next chapter?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="text-mute text-lg mt-6 max-w-xl mx-auto">
            Tell us where you're stuck or where you want to grow. We'll reply
            within one business day with a clear, honest plan — no obligation.
          </p>
        </FadeUp>
        <FadeUp delay={0.24} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/contact" className="!px-8 !py-4 text-base">
            Book a free consultation
          </Button>
          <Button href="mailto:flarestack.team@gmail.com" variant="ghost" className="!px-8 !py-4 text-base">
            flarestack.team@gmail.com
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
