import { Link } from "react-router-dom";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "IT Solutions", to: "/services#it-solutions" },
      { label: "Web Development", to: "/services#web-development" },
      { label: "AI Automation", to: "/services#ai-automation" },
      { label: "Paid Advertising", to: "/services#paid-advertising" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="container-flare py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-lg font-semibold text-paper">Flare Stack</span>
            </Link>
            <p className="text-mute text-sm leading-relaxed max-w-xs">
              Digital and business growth solutions — IT, AI, web, marketing and
              advertising under one roof.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-mute hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <a
              href="mailto:flarestack.team@gmail.com"
              className="text-sm text-paper hover:text-[#3874FF] transition-colors mb-3"
            >
              flarestack.team@gmail.com
            </a>
            <p className="text-xs text-mute mt-5 leading-relaxed">
              We're available 24/7 with a guaranteed fast response on every
              enquiry.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mute">© {new Date().getFullYear()} Flare Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-mute hover:text-paper">Privacy Policy</a>
            <a href="#" className="text-xs text-mute hover:text-paper">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
