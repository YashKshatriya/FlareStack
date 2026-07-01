import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-flare flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="relative grid place-items-center h-8 w-8 rounded-full bg-gradient-to-br from-[#1B4EF5] to-[#3874FF]">
            <Flame size={16} className="text-void" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            Flare Stack
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 ${
                  isActive ? "text-paper" : "text-mute hover:text-paper"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1B4EF5] to-[#3874FF] rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/contact" className="!px-5 !py-2.5 text-[13px]">
            Start a project
          </Button>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-void border-b border-line"
          >
            <div className="container-flare flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 text-base font-medium border-b border-line/60 last:border-0 ${
                      isActive ? "text-paper" : "text-mute"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-4 justify-center" onClick={() => setOpen(false)}>
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
