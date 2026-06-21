"use client";

import Image from "next/image";

const values = [
  { title: "Innovation First", icon: "✦" },
  { title: "Client Success", icon: "◆" },
  { title: "People Empowerment", icon: "●" },
  { title: "Purpose Driven", icon: "▲" },
];

export default function SamuderaVision() {
  return (
    <section id="samudera" className="relative bg-[#0a0a0a] py-28 px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow — gold-tinted to differentiate from emerald sections */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EAD78C]/[0.06] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">05</span>
          <div className="w-8 h-px bg-[#EAD78C]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#EAD78C]">Founder Vision</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center ">
          <div className="relative">
            <div className="absolute inset-0 -m-6 blur-3xl bg-[#EAD78C]/15 rounded-full" />
            <Image
              src="/logo.png"
              alt="Samudera Inovasi Teknologi"
              width={140}
              height={140}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Heading — condensed */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#EAD78C] mb-4">
            Creating Impact Through Innovation
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Building Something
            <span className="italic text-[#EAD78C]"> Bigger Than Myself</span>
          </h2>

          <p className="text-[#9d9b96] leading-relaxed text-sm sm:text-base">
            <span className="text-white font-medium">Samudera Inovasi Teknologi</span> is my venture
            beyond freelance work — turning the same craft into solutions built for lasting impact,
            not just delivered features.
          </p>
        </div>

        {/* Values — compact row, icon + label only */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 max-w-2xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center gap-2 bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] p-4 rounded-sm
                         hover:border-[#EAD78C]/30 hover:bg-white/[0.05]
                         transition-all duration-300"
            >
              <span className="text-[#EAD78C]/70 text-base">{value.icon}</span>
              <h3 className="text-[11px] font-medium text-white leading-tight">{value.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA — points to the standalone Samudera site */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="#templates"
            className="group inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.12em] font-medium
                       bg-[#EAD78C] text-[#0a0a0a] px-7 py-3.5 rounded-sm
                       shadow-[0_0_25px_-5px_rgba(234,215,140,0.5)]
                       hover:shadow-[0_0_35px_-3px_rgba(234,215,140,0.7)] hover:-translate-y-0.5
                       transition-all duration-300"
          >
            See Our Work
            <svg
              width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              <path d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-[11px] text-[#9d9b96]/70 tracking-wide">
            samuderainovasiteknologi.com — launching soon. In the meantime, browse what we&apos;ve built.
          </p>
        </div>

      </div>
    </section>
  );
}