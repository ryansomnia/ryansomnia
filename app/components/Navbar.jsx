"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(({ href }) => document.querySelector(href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b14]/60 backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={
        scrolled
          ? { boxShadow: "0 1px 0 0 rgba(78,205,196,0.1)" }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">

        <Link
          href="/"
          className="font-serif text-[17px] font-bold tracking-wide text-[#f0f4f7]"
        >
          Heriyanto{" "}
          <span className="text-[#4ECDC4] drop-shadow-[0_0_12px_rgba(78,205,196,0.4)]">
            Sitorus
          </span>
        </Link>

        <ul className="hidden md:flex gap-9 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.replace("#", "");
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-[#4ECDC4]"
                      : "text-[#9db4c4] hover:text-[#f0f4f7]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#4ECDC4] via-[#4ECDC4]/70 to-transparent shadow-[0_0_8px_0_rgba(78,205,196,0.6)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:block text-[11px] uppercase tracking-[0.1em] font-medium bg-[#4ECDC4] text-[#060b14] px-4 py-2 rounded-sm
                     shadow-[0_0_18px_-4px_rgba(78,205,196,0.5)]
                     hover:shadow-[0_0_26px_-2px_rgba(78,205,196,0.7)] hover:-translate-y-0.5
                     transition-all duration-300"
        >
          Hire Me
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#9db4c4] hover:text-[#f0f4f7] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden bg-[#060b14]/80 backdrop-blur-xl border-t border-white/[0.07] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5 list-none">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.replace("#", "");
            return (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "text-[#4ECDC4]"
                      : "text-[#9db4c4] hover:text-[#4ECDC4]"
                  }`}
                >
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#4ECDC4] shadow-[0_0_6px_rgba(78,205,196,0.8)]" />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;