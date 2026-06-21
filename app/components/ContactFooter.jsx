"use client";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const secondaryContacts = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Heriyanto Sitorus",
    href: "https://www.linkedin.com/in/heriyanto-sitorus-7018a3111/",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "heriyantositorus14@gmail.com",
    href: "mailto:heriyantositorus14@gmail.com",
  },
];

const whatsapp = {
  icon: FaWhatsapp,
  label: "WhatsApp — Fastest Response",
  value: "+62 877 8101 8141",
  href: "https://wa.me/6287781018141",
};

const ContactFooter = () => {
  return (
    <footer id="contact" className="relative bg-[#060b14] border-t border-white/[0.06] overflow-hidden">

      {/* Closing wave motif — echoes the Header, bringing the page full circle */}
      <svg
        className="absolute top-0 left-0 w-full h-40 opacity-[0.1] -z-0"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 60 C 220 140, 420 0, 660 80 C 880 150, 1040 40, 1200 90 L 1200 0 L 0 0 Z" fill="#4ECDC4" />
      </svg>
      <div className="pointer-events-none absolute top-0 left-1/3 w-[400px] h-[300px] bg-[#0a3d62]/[0.2] rounded-full blur-[130px]" />

      {/* Contact section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-24">

        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">08</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">Contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]">Touch</span>
            </h2>
            <p className="text-sm font-light text-[#9db4c4] leading-relaxed max-w-sm">
              Open to new opportunities, collaborations, or just a good conversation. Reach out through any platform below.
            </p>
          </div>
        </div>

        {/* WhatsApp — featured, full width */}
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 p-6 mb-4 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08]
                     hover:border-[#4ECDC4]/30 hover:bg-white/[0.05]
                     transition-all duration-300"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 97% 100%, 0 100%, 0 100%)" }}
        >
          <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#4ECDC4]/10 border border-[#4ECDC4]/20 group-hover:bg-[#4ECDC4]/15 transition-colors">
            <whatsapp.icon size={24} className="text-[#4ECDC4]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#4ECDC4] mb-1">{whatsapp.label}</p>
            <p className="text-base font-medium text-[#f0f4f7]">{whatsapp.value}</p>
          </div>
          <svg
            width="16" height="16" viewBox="0 0 12 12" fill="none" stroke="#4ECDC4" strokeWidth="1.5"
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Secondary contacts — side by side */}
        <div className="grid sm:grid-cols-2 gap-3">
          {secondaryContacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] hover:border-[#4ECDC4]/25 transition-colors duration-300"
            >
              <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white/[0.04] border border-white/[0.07] group-hover:border-[#4ECDC4]/20 transition-colors">
                <Icon size={16} className="text-[#4ECDC4]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#9db4c4] mb-0.5">{label}</p>
                <p className="text-[13px] font-medium text-[#f0f4f7] truncate">{value}</p>
              </div>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#4ECDC4" strokeWidth="1.5" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.06] px-6 lg:px-16 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
            <p className="text-[11px] text-[#9db4c4] tracking-wide">
              &copy; {new Date().getFullYear()} Heriyanto Sitorus. All rights reserved.
            </p>
          </div>
          <p className="text-[11px] text-[#9db4c4]/50 tracking-wide">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;