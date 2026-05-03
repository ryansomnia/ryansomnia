"use client";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const contacts = [
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
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+62 877 8101 8141",
    href: "https://wa.me/6287781018141",
  },
];

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/[0.06]">

      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">

        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">05</span>
          <div className="w-8 h-px bg-emerald-300" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="italic text-emerald-300">Touch</span>
            </h2>
            <p className="text-sm font-light text-[#9d9b96] leading-relaxed max-w-sm">
              Open to new opportunities, collaborations, or just a good conversation. Reach out through any platform below.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-[#111] border border-white/[0.06] rounded-sm hover:border-emerald-300/30 transition-colors duration-300">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#1a1a1a] border border-white/[0.06] rounded-sm group-hover:border-emerald-300/20 transition-colors">
                  <Icon size={18} className="text-emerald-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#9d9b96] mb-0.5">{label}</p>
                  <p className="text-[13px] font-medium text-[#f0ede6] truncate">{value}</p>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#6ee7b7" strokeWidth="1.5" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] px-6 lg:px-16 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-[#9d9b96] tracking-wide">
            &copy; {new Date().getFullYear()} Heriyanto Sitorus. All rights reserved.
          </p>
          <p className="text-[11px] text-[#9d9b96]/50 tracking-wide">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;