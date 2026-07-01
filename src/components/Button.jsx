import { Link } from "react-router-dom";

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  children,
  icon = true,
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#1B4EF5] to-[#3874FF] text-[#0a0d13] shadow-[0_0_0_0_rgba(27,78,245,0.5)] hover:shadow-[0_0_30px_4px_rgba(27,78,245,0.45)] hover:-translate-y-0.5",
    ghost:
      "border border-line text-paper hover:border-[#1B4EF5]/60 hover:bg-[#1B4EF5]/5",
    light:
      "bg-paper text-void hover:-translate-y-0.5 hover:shadow-[0_0_30px_4px_rgba(244,241,234,0.25)]",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
