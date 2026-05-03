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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">

        <Link href="/" className="font-serif text-[17px] font-bold tracking-wide text-[#f0ede6]">
          Heriyanto <span className="text-emerald-300">Sitorus</span>
        </Link>

        <ul className="hidden md:flex gap-9 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.replace("#", "");
            return (
              <li key={label}>
                <Link href={href} className={`text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-200 relative ${isActive ? "text-emerald-300" : "text-[#9d9b96] hover:text-[#f0ede6]"}`}>
                  {label}
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-px bg-emerald-300" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <a href="#contact" className="hidden md:block text-[11px] uppercase tracking-[0.1em] font-medium bg-emerald-300 text-[#0a0a0a] px-4 py-2 rounded-sm hover:opacity-80 transition-opacity">
          Hire Me
        </a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#9d9b96] hover:text-[#f0ede6] transition-colors" aria-label="Toggle menu">
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

      <div className={`md:hidden bg-[#0f0f0f] border-t border-white/[0.06] overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-6 py-4 gap-5 list-none">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.replace("#", "");
            return (
              <li key={label}>
                <Link href={href} onClick={() => setIsOpen(false)} className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${isActive ? "text-emerald-300" : "text-[#9d9b96] hover:text-emerald-300"}`}>
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