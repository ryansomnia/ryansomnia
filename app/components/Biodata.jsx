"use client";
import Image from "next/image";

const experiences = [
  {
    company: "PT Asuransi BRI Life",
    role: "Software Engineer",
    period: "Aug 2020 – Present",
    items: [
      { title: "WA Corporate", desc: "Verified customer policy data with BRI Life as Host and Qiscus as Client." },
      { title: "Contact Center", desc: "Created RESTful APIs for IVR, Welcome Call, and Profiling Data." },
      { title: "My Access", desc: "Managed Registration, Login, and Policy Detail services." },
      { title: "Notification Center", desc: "Handled API notifications using Kafka technology." },
    ],
  },
];

const freelance = [
  { title: "QR Web — Hospital Project", desc: "Web app for handling PCR test documents and generating QR codes as proof of completion." },
  { title: "Private School Landing Page, Bogor", desc: "Landing page with admin panel for content management." },
];

const facts = [
  { label: "Degree", value: "S1 Ilmu Komputer" },
  { label: "Status", value: "Full-time + Freelance" },
  { label: "Based", value: "Indonesia" },
];

const BioData = () => {
  return (
    <section id="about" className="relative bg-[#060b14] text-[#f0f4f7] py-24 px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-40 -left-40 w-[400px] h-[400px] bg-[#4ECDC4]/[0.06] rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] bg-[#0a3d62]/[0.18] rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">02</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">About & Resume</span>
        </div>

        {/* Top row: photo (organic clip) + intro side by side, full width */}
        <div className="grid md:grid-cols-[280px_1fr] gap-10 lg:gap-16 mb-16 items-center">

          {/* Photo with organic wave clip-path */}
          <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
            <div className="absolute inset-0 -m-8 bg-[#4ECDC4]/10 rounded-full blur-[80px] -z-10" />
            <div
              className="relative w-full aspect-square overflow-hidden"
              style={{
                clipPath:
                  "path('M0,60 C0,20 20,0 60,0 L220,0 C260,0 280,20 280,60 L280,220 C280,260 255,280 210,275 C160,270 120,300 70,280 C25,262 0,250 0,210 Z')",
              }}
            >
              <Image
                src="/bio.png"
                alt="Heriyanto Sitorus"
                fill
                sizes="280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/30 via-transparent to-transparent" />
            </div>
            {/* Wave accent line under photo */}
            <svg className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-3" viewBox="0 0 120 12" fill="none">
              <path d="M0 6 Q 15 0, 30 6 T 60 6 T 90 6 T 120 6" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>

          {/* Intro + quick facts */}
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4">
                My <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]">Resume</span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#9db4c4] max-w-lg">
                Software Engineer with 5+ years of experience building production-grade systems in the insurance and healthcare sector, alongside freelance web projects.
              </p>
            </div>

            {/* Quick facts — horizontal stat row, not vertical list */}
            <div className="flex flex-wrap gap-3">
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex-1 min-w-[140px] bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-sm px-4 py-3
                             hover:border-[#4ECDC4]/25 transition-colors duration-300"
                >
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#9db4c4] mb-1">{label}</p>
                  <p className="text-[13px] font-medium text-[#f0f4f7] leading-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience — timeline rail layout */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#4ECDC4]">Work Experience</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {experiences.map((exp) => (
            <div key={exp.company} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8 gap-1">
              <div>
                <p className="text-base font-medium text-[#f0f4f7]">{exp.company}</p>
                <p className="text-[12px] text-[#4ECDC4] tracking-wide mt-0.5">{exp.role}</p>
              </div>
              <span className="text-[11px] text-[#9db4c4] tracking-wide shrink-0">{exp.period}</span>
            </div>
          ))}

          {/* Timeline rail */}
          <div className="relative pl-8">
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gradient-to-b from-[#4ECDC4]/60 via-[#4ECDC4]/20 to-transparent" />
            <div className="flex flex-col gap-7">
              {experiences[0].items.map(({ title, desc }) => (
                <div key={title} className="relative">
                  <span className="absolute -left-8 top-1 w-2.5 h-2.5 rounded-full bg-[#060b14] border-2 border-[#4ECDC4] shadow-[0_0_10px_rgba(78,205,196,0.5)]" />
                  <p className="text-[13px] font-medium text-[#f0f4f7] mb-1">{title}</p>
                  <p className="text-[12px] font-light text-[#9db4c4] leading-relaxed max-w-xl">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance — editorial list with large index numbers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#4ECDC4]">Freelance Projects</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <div className="flex flex-col">
            {freelance.map(({ title, desc }, i) => (
              <div
                key={title}
                className="group relative flex items-start gap-6 py-5 border-t border-white/[0.06] first:border-t-0
                           hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="font-serif text-3xl font-bold text-white/[0.06] leading-none shrink-0 group-hover:text-[#4ECDC4]/15 transition-colors duration-300">
                  0{i + 1}
                </span>
                <div className="pt-1">
                  <p className="text-[13px] font-medium text-[#f0f4f7] mb-1">{title}</p>
                  <p className="text-[12px] font-light text-[#9db4c4] leading-relaxed max-w-lg">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BioData;