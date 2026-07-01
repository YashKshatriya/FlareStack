import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { useFormSubmit } from "../lib/useFormSubmit";

const infoCards = [
  {
    title: "Email us",
    value: "flarestack.team@gmail.com",
    href: "mailto:flarestack.team@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "Chat directly with our team",
    href: "https://wa.me/10000000000",
  },
  {
    title: "Availability",
    value: "Open 24/7, every day of the year",
  },
  {
    title: "Response time",
    value: "We reply within one business day, guaranteed",
  },
];

const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

export default function Contact() {
  const { status, submit } = useFormSubmit();
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit({ ...form, _subject: "New enquiry from Flare Stack contact page" });
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's start with a conversation."
        description="Tell us about your business and what you're trying to achieve. We read every message and respond fast — no auto-replies, no sales scripts."
      />

      <section className="py-24 lg:py-28">
        <div className="container-flare grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
          {/* Info column */}
          <div className="space-y-4">
            {infoCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <div>
                  <p className="text-sm text-mute mb-1">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="font-display text-base font-semibold text-paper hover:text-[#3874FF] transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display text-base font-semibold text-paper">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="rounded-2xl border border-line bg-gradient-to-br from-[#1B4EF5]/10 to-[#3874FF]/10 p-6"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#1B4EF5] mt-0.5 shrink-0">📍</span>
                <p className="text-sm text-paper/90 leading-relaxed">
                  Remote-first, working with clients worldwide — with team
                  members across multiple time zones for true 24/7 coverage.
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
                <h3 className="font-display text-2xl font-semibold mb-2">Message sent</h3>
                <p className="text-mute max-w-sm">
                  Thanks for reaching out — we'll get back to you within one
                  business day.
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
                <Field label="Company name" name="company" value={form.company} onChange={handleChange} />

                <div>
                  <label className="text-sm text-paper/90 mb-2 block">Estimated budget</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors ${
                          form.budget === b
                            ? "border-[#1B4EF5] bg-[#1B4EF5]/10 text-paper"
                            : "border-line text-mute hover:border-[#1B4EF5]/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-paper/90 mb-2 block">
                    What are you looking to achieve?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us a bit about your business and what you'd like help with..."
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
                    <span>Sending...</span>
                  ) : (
                    "Send message"
                  )}
                </Button>
                <p className="text-xs text-mute text-center">
                  We typically respond within one business day.
                </p>
              </motion.form>
            )}
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
