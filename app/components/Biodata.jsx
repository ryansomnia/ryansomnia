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
  { title: "QR Web – Hospital Project", desc: "Web app for handling PCR test documents and generating QR codes as proof of completion." },
  { title: "Private School Landing Page, Bogor", desc: "Landing page with admin panel for content management." },
];

const BioData = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] text-[#f0ede6] py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">02</span>
          <div className="w-8 h-px bg-emerald-300" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">About & Resume</span>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-12 lg:gap-20">

          {/* Left — photo + quick facts */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/5] max-w-[320px]">
              <Image
                src="/bio.png"
                alt="Heriyanto Sitorus"
                fill
                className="object-cover rounded-sm border border-white/[0.08]"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-emerald-300/20 rounded-sm -z-10" />
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3 pt-4">
              {[
                { label: "Degree", value: "S1 Ilmu Komputer" },
                { label: "Status", value: "Full-time + Freelance" },
                { label: "Based", value: "Indonesia" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline border-b border-white/[0.06] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#9d9b96]">{label}</span>
                  <span className="text-[13px] font-medium text-[#f0ede6]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-12">

            {/* Intro */}
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4">
                My <span className="italic text-emerald-300">Resume</span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#9d9b96] max-w-lg">
                Software Engineer with 5+ years of experience building production-grade systems in the insurance and healthcare sector, alongside freelance web projects.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-300">Work Experience</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              {experiences.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-5 gap-1">
                    <div>
                      <p className="text-base font-medium text-[#f0ede6]">{exp.company}</p>
                      <p className="text-[12px] text-emerald-300 tracking-wide mt-0.5">{exp.role}</p>
                    </div>
                    <span className="text-[11px] text-[#9d9b96] tracking-wide shrink-0">{exp.period}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {exp.items.map(({ title, desc }) => (
                      <div key={title} className="flex gap-4 p-4 bg-[#111] border border-white/[0.06] rounded-sm">
                        <div className="w-1 shrink-0 bg-emerald-300/40 rounded-full" />
                        <div>
                          <p className="text-[12px] font-medium text-[#f0ede6] mb-0.5">{title}</p>
                          <p className="text-[12px] font-light text-[#9d9b96] leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Freelance */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-300">Freelance Projects</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {freelance.map(({ title, desc }) => (
                  <div key={title} className="p-4 bg-[#111] border border-white/[0.06] rounded-sm">
                    <p className="text-[12px] font-medium text-[#f0ede6] mb-1.5">{title}</p>
                    <p className="text-[12px] font-light text-[#9d9b96] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BioData;