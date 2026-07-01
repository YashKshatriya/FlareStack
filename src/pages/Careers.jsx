import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { Eyebrow, FadeUp } from "../components/Section";
import Button from "../components/Button";
import { jobs } from "../lib/data";
import { useFormSubmit } from "../lib/useFormSubmit";

const perks = [
  "Fully remote-friendly, flexible hours",
  "Work across real clients & industries",
  "Learning budget for courses & tools",
  "Health coverage & paid time off",
];

export default function Careers() {
  const [selected, setSelected] = useState(null);
  const { status, submit } = useFormSubmit();
  const [form, setForm] = useState({ name: "", email: "", subject: "", position: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleApply(job) {
    setSelected(job.title);
    setForm((f) => ({ ...f, position: job.title }));
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit({ ...form, _subject: `New job application — ${form.position || "Flare Stack"}` });
  }

  return (
    <>
      <PageHeader
        eyebrow="Careers at Flare Stack"
        title="Build the systems that grow real businesses."
        description="We're a small, senior team that moves fast and cares deeply about the outcomes our work produces. If that sounds like you, we'd love to hear from you."
      />

      {/* Perks */}
      <section className="py-20 border-b border-line bg-surface/30">
        <div className="container-flare grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((p, i) => (
            <FadeUp key={p} delay={i * 0.06} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5">
              <CheckCircle2 size={18} className="text-[#1B4EF5] mt-0.5 shrink-0" />
              <p className="text-sm text-paper/90">{p}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Always open to talent */}
      <section className="py-24 lg:py-28">
        <div className="container-flare">
          <div className="max-w-2xl mb-14">
            <FadeUp>
              <Eyebrow>Join our team</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
                We're always looking for exceptional talent.
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-mute mt-4 text-lg leading-relaxed">
                Don't see a specific role that matches your skills? We believe great talent can't always be defined by a job description. If you're passionate about technology and want to make an impact, we want to hear from you.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.16}>
            <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#1B4EF5]/15 to-[#3874FF]/15 text-[#3874FF] shrink-0">
                  <span className="text-xl">💼</span>
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-paper mb-2">General Application</h3>
                  <p className="text-sm text-mute leading-relaxed mb-4">
                    Tell us about your expertise, what you're passionate about, and how you think you can contribute to our mission. We review every application personally and will reach out if there's a potential fit.
                  </p>
                  <Button variant="ghost" onClick={() => handleApply({ title: "General application", dept: "Any", type: "Remote", description: "Tell us about yourself and your skills." })}>
                    Apply now
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-24 lg:py-28 border-t border-line bg-surface/30">
        <div className="container-flare">
          <FadeUp className="text-center mb-12 max-w-2xl mx-auto">
            <Eyebrow>Job application</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-4">
              {selected ? `Apply for ${selected}` : "Don't see your role? Apply anyway."}
            </h2>
            <p className="text-mute mt-4">
              Tell us about yourself — we review every application personally
              and reply within a week.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
            {/* Info column */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-line bg-surface p-6 flex items-start gap-4"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-[#1B4EF5]/15 to-[#3874FF]/15 text-[#3874FF] shrink-0">
                  <span>✉️</span>
                </span>
                <div>
                  <p className="text-sm text-mute mb-1">Email us</p>
                  <a href="mailto:flarestack.team@gmail.com" className="font-display text-base font-semibold text-paper hover:text-[#3874FF] transition-colors">
                    flarestack.team@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="rounded-2xl border border-line bg-surface p-6 flex items-start gap-4"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-[#1B4EF5]/15 to-[#3874FF]/15 text-[#3874FF] shrink-0">
                  <span>🕐</span>
                </span>
                <div>
                  <p className="text-sm text-mute mb-1">Response time</p>
                  <p className="font-display text-base font-semibold text-paper">Within one week</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="rounded-2xl border border-line bg-surface p-6 flex items-start gap-4"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-[#1B4EF5]/15 to-[#3874FF]/15 text-[#3874FF] shrink-0">
                  <span>📍</span>
                </span>
                <div>
                  <p className="text-sm text-mute mb-1">Work location</p>
                  <p className="font-display text-base font-semibold text-paper">Remote-first</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="rounded-2xl border border-line bg-gradient-to-br from-[#1B4EF5]/10 to-[#3874FF]/10 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#1B4EF5] mt-0.5 shrink-0">💼</span>
                  <p className="text-sm text-paper/90 leading-relaxed">
                    We're looking for passionate people who want to build great products and grow with us. If you don't see a perfect match, we still want to hear from you.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Form column */}
            <div>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-[#1B4EF5]/30 bg-surface p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <span className="text-[#1B4EF5] mb-5 text-4xl">✓</span>
                  <h3 className="font-display text-2xl font-semibold mb-2">Application received</h3>
                  <p className="text-mute max-w-sm">
                    Thanks for applying — our team will review it and get back to
                    you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-line bg-surface p-7 sm:p-9 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-sm text-paper/90 mb-2 block">Position</label>
                    <select
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-void border border-line px-4 py-3 text-sm text-paper focus:outline-none focus:border-[#1B4EF5]/60 transition-colors"
                    >
                      <option value="">Select a role</option>
                      {jobs.map((j) => (
                        <option key={j.title} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                      <option value="General application">General application</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-paper/90 mb-2 block">
                      Tell us about yourself & link your resume/portfolio
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="A bit about your experience, and a link to your resume or portfolio..."
                      className="w-full rounded-lg bg-void border border-line px-4 py-3 text-sm text-paper placeholder:text-mute/60 focus:outline-none focus:border-[#1B4EF5]/60 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-[#1B4EF5]">
                      <span>⚠</span> Something went wrong — please try again or email us directly.
                    </div>
                  )}

                  <Button type="submit" className="w-full justify-center" icon={false}>
                    {status === "loading" ? (
                      <span>Submitting...</span>
                    ) : (
                      "Submit application"
                    )}
                  </Button>
                  <p className="text-xs text-mute text-center">
                    We typically respond within one week.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="text-sm text-paper/90 mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg bg-void border border-line px-4 py-3 text-sm text-paper placeholder:text-mute/60 focus:outline-none focus:border-[#1B4EF5]/60 transition-colors"
      />
    </div>
  );
}
