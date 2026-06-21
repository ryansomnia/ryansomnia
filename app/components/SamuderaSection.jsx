"use client";

import Image from "next/image";

const values = [
  { title: "Innovation First", desc: "Solutions with meaningful value, not just features." },
  { title: "Client Success", desc: "Technology that solves real business problems." },
  { title: "People Empowerment", desc: "Opportunities for talented people to grow." },
  { title: "Purpose Driven", desc: "Impact beyond profit, in everything we build." },
];

export default function SamuderaVision() {
  return (
    <section id="samudera" className="relative bg-[#060b14] py-28 px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[480px] h-[480px] bg-[#4ECDC4]/[0.06] rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#0a3d62]/[0.2] rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">05</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">Founder Vision</span>
        </div>

        {/* Asymmetric split: logo + heading left, statement + values right */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* Left — logo with wave accent + heading */}
          <div className="flex flex-col">
            <div className="relative w-fit mb-8">
              <div className="absolute inset-0 -m-8 blur-3xl bg-[#4ECDC4]/15 rounded-full" />
              {/* Wave arc behind logo, echoing the brand mark */}
              <svg className="absolute -bottom-2 -left-6 w-40 h-20 opacity-40" viewBox="0 0 160 80" fill="none">
                <path d="M0 50 C 30 20, 60 70, 90 40 C 115 18, 140 45, 160 30" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <Image
                src="/logo.png"
                alt="Samudera Inovasi Teknologi"
                width={120}
                height={120}
                className="relative z-10"
              />
            </div>

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#4ECDC4] mb-4">
              Creating Impact Through Innovation
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Building Something
              <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]"> Bigger Than Myself</span>
            </h2>
          </div>

          {/* Right — statement, values as connected pillars, CTA */}
          <div className="flex flex-col">
            <p className="text-[#9db4c4] leading-relaxed text-sm sm:text-base mb-10 max-w-md">
              <span className="text-[#f0f4f7] font-medium">Samudera Inovasi Teknologi</span> is my venture
              beyond freelance work — turning the same craft into solutions built for lasting impact,
              not just delivered features.
            </p>

            {/* Values — vertical pillars connected by a rail, echoing BioData's timeline */}
            <div className="relative pl-6 mb-10">
              <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gradient-to-b from-[#4ECDC4]/50 via-[#0a3d62]/40 to-transparent" />
              <div className="flex flex-col gap-5">
                {values.map((value) => (
                  <div key={value.title} className="relative">
                    <span className="absolute -left-6 top-1 w-2 h-2 rounded-full bg-[#060b14] border-2 border-[#4ECDC4]" />
                    <p className="text-[13px] font-medium text-[#f0f4f7] mb-0.5">{value.title}</p>
                    <p className="text-[12px] font-light text-[#9db4c4] leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] px-6 py-5"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 92% 100%, 0 100%, 0 100%)" }}
            >
              <p className="text-[11px] text-[#9db4c4] tracking-wide">
                samuderainovasiteknologi.com — launching soon.
              </p>
              <a
                href="#templates"
                className="group inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.12em] font-medium
                           bg-[#4ECDC4] text-[#060b14] px-6 py-3 shrink-0
                           shadow-[0_0_25px_-5px_rgba(78,205,196,0.5)]
                           hover:shadow-[0_0_35px_-3px_rgba(78,205,196,0.7)] hover:-translate-y-0.5
                           transition-all duration-300"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%)" }}
              >
                See Our Work
                <svg
                  width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}