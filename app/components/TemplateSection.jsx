"use client";

import Image from "next/image";

const templates = [
  {
    number: "01",
    title: "Company Profile",
    category: "Business",
    image: "/templates/company.jpg",
    description:
      "Modern corporate website designed for professional companies and agencies.",
    stack: ["Next.js", "Tailwind", "SEO Ready"],
    demo: "#",
  },
  {
    number: "02",
    title: "Toyota Sales Web",
    category: "Sales",
    image: "/templates/toyota.png",
    description:
      "Conversion-focused landing page for local businesses and entrepreneurs.",
    stack: ["Next.js", "Responsive"],
    demo: "https://mobiltoyotacibubur.com/",
  },
  {
    number: "03",
    title: "Church Website",
    category: "Organization",
    image: "/templates/church.png",
    description:
      "Website template for churches with events, sermons, ministries, and livestream sections.",
    stack: ["Next.js", "CMS Ready"],
    demo: "https://www.gppkcbn.org/",
  },
  {
    number: "04",
    title: "Event Organizer",
    category: "Event",
    image: "/templates/eo.png",
    description:
      "Elegant website template to showcase events, schedules, and registrations.",
    stack: ["Next.js", "Responsive"],
    demo: "https://kabita-wedding-4ep3.vercel.app/",
  },
  {
    number: "05",
    title: "Clinic Website",
    category: "Healthcare",
    image: "/templates/clinic.png",
    description:
      "Professional Aesthetic Clinic website with doctor profiles and appointment forms.",
    stack: ["Next.js", "Fast Loading"],
    demo: "https://aurora-clinic.vercel.app/",
  },
  {
    number: "06",
    title: "School Website",
    category: "School",
    image: "/templates/school.png",
    description:
      "Modern Web template for School",
    stack: ["Next.js", "SEO Ready"],
    demo: "https://sekolahcerdasbangsa.sch/",
  },
  {
    number: "07",
    title: "Dental Website",
    category: "Healthcare",
    image: "/templates/dental.png",
    description:
      "Professional Dental website with doctor profiles and appointment forms.",
    stack: ["Next.js", "Fast Loading"],
    demo: "#",
  },
];

export default function TemplateSection() {
  return (
    <section
      id="templates"
      className="bg-[#0a0a0a] py-16 md:py-24 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">
            05
          </span>

          <div className="w-8 h-px bg-emerald-300" />

          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">
            Templates
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Ready-Made <span className="italic text-emerald-300">Templates</span>
        </h2>

        <p className="text-sm font-light text-[#9d9b96] mb-12 max-w-xl">
          Professionally crafted website templates for businesses,
          organizations, startups, churches, healthcare services,
          and personal brands.
        </p>

        {/* FEATURED TEMPLATE */}
        <div className="group relative overflow-hidden border border-white/[0.06] bg-[#111] rounded-sm mb-6">

          {/* <div className="grid lg:grid-cols-2">

            <div className="relative h-[280px] md:h-[420px]">
              <Image
                src="/templates/company.jpg"
                alt="Featured Template"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <span className="absolute top-6 left-6 font-serif text-7xl text-white/10 font-bold">
                01
              </span>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">

              <span className="text-[11px] uppercase tracking-[0.15em] text-emerald-300 mb-4">
                Featured Template
              </span>

              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Company Profile
              </h3>

              <p className="text-sm text-[#9d9b96] leading-relaxed mb-6">
                Premium corporate website template designed for modern
                companies, consultants, agencies, and professional services.
                Built with performance, elegance, and SEO in mind.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "Tailwind", "SEO Ready", "Premium Design"].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-[10px] uppercase tracking-[0.1em]
                      px-3 py-1 border border-white/[0.08]
                      text-[#9d9b96]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-5">
                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.15em]
                  text-emerald-300 hover:text-emerald-200"
                >
                  Live Demo →
                </a>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.15em]
                  text-[#9d9b96] hover:text-white"
                >
                  View Details
                </a>
              </div>

            </div>
          </div> */}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {templates.slice(1).map((template) => (
            <TemplateCard
              key={template.number}
              template={template}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function TemplateCard({ template }) {
  return (
    <div
      className="
      group
      bg-[#111]
      border
      border-white/[0.06]
      rounded-sm
      overflow-hidden
      hover:border-emerald-300/30
      transition-all
      duration-500"
    >

      <div className="relative h-56 overflow-hidden">

        <Image
          src={template.image}
          alt={template.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <span className="absolute top-4 left-4 font-serif text-5xl font-bold text-white/10">
          {template.number}
        </span>

        <span
          className="
          absolute
          top-4
          right-4
          text-[10px]
          uppercase
          tracking-[0.12em]
          px-3 py-1
          border
          border-white/10
          bg-black/50
          backdrop-blur-sm
          text-emerald-300"
        >
          {template.category}
        </span>
      </div>

      <div className="p-5">

        <h3 className="text-lg font-medium text-white mb-3">
          {template.title}
        </h3>

        <p className="text-sm text-[#9d9b96] leading-relaxed mb-5">
          {template.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {template.stack.map((item) => (
            <span
              key={item}
              className="
              text-[10px]
              uppercase
              tracking-[0.1em]
              px-2 py-1
              border
              border-white/[0.08]
              text-[#9d9b96]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">

          <a
            href={template.demo}
            className="
            text-[11px]
            uppercase
            tracking-[0.15em]
            text-emerald-300
            hover:text-emerald-200"
          >
            Live Demo →
          </a>

          <button
            className="
            text-[11px]
            uppercase
            tracking-[0.15em]
            text-[#9d9b96]
            hover:text-white"
          >
            Details
          </button>

        </div>
      </div>
    </div>
  );
}