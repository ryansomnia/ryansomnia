"use client";

import Image from "next/image";

// const featuredTemplate = {
//   number: "01",
//   title: "Company Profile",
//   category: "Business",
//   image: "/templates/company.jpg",
//   description:
//     "Premium corporate website template designed for modern companies, consultants, agencies, and professional services. Built with performance, elegance, and SEO in mind.",
//   stack: ["Next.js", "Tailwind", "SEO Ready", "Premium Design"],
//   demo: "#",
// };

const templates = [
  {
    number: "02",
    title: "Toyota Sales Web",
    category: "Sales",
    image: "/templates/toyota.png",
    description: "Conversion-focused landing page for local businesses and entrepreneurs.",
    stack: ["Next.js", "Responsive"],
    demo: "https://mobiltoyotacibubur.com/",
    size: "large",
  },
  {
    number: "03",
    title: "Church Website",
    category: "Organization",
    image: "/templates/church.png",
    description: "Website template for churches with events, sermons, ministries, and livestream sections.",
    stack: ["Next.js", "CMS Ready"],
    demo: "https://www.gppkcbn.org/",
    size: "large",
  },
  {
    number: "04",
    title: "Event Organizer",
    category: "Event",
    image: "/templates/eo.png",
    description: "Elegant website template to showcase events, schedules, and registrations.",
    stack: ["Next.js", "Responsive"],
    demo: "https://kabita-wedding-4ep3.vercel.app/",
    size: "small",
  },
  {
    number: "05",
    title: "Aurora Clinic Website",
    category: "Healthcare",
    image: "/templates/clinic.png",
    description: "Professional Aesthetic Clinic website with doctor profiles and appointment forms.",
    stack: ["Next.js", "Fast Loading"],
    demo: "https://aurora-clinic.vercel.app/",
    size: "small",
  },
  {
    number: "06",
    title: "School Website",
    category: "School",
    image: "/templates/school.png",
    description: "Modern web template for schools, with admin-managed content.",
    stack: ["Next.js", "SEO Ready"],
    demo: "https://sekolahcerdasbangsa.sch/",
    size: "small",
  },
  {
    number: "07",
    title: "Dental Website",
    category: "Hotel",
    image: "/templates/hotel.png",
    description: "Hotel Website",
    stack: ["Next.js", "Fast Loading"],
    demo: "https://lumiere-hotel-nu.vercel.app/",
    size: "small",
  },
  {
    number: "08",
    title: "Lumen Clinic Minimalis Website",
    category: "Healthcare",
    image: "/templates/lumenClinic.png",
    description: "Ceritakan kondisi kulit Anda, dan biarkan dokter kami membantu menentukan langkah yang tepat.",
    stack: ["Next.js", "Fast Loading"],
    demo: "https://lumen-clinic-eta.vercel.app/",
    size: "small",
  },
  {
    number: "09",
    title: "Restaurant Ordering",
    category: "Food & Beverage",
    image: "/templates/kitchen.png",
    description:
      "A modern restaurant ordering application that lets customers browse menus, place orders, and enjoy a fast, seamless dining experience.",
    stack: ["Next.js", "Fast Loading"],
    demo: "https://nusantara-kitchen.vercel.app/",
    size: "small",
  }
  
];

export default function TemplateSection() {
  const largeItems = templates.filter((t) => t.size === "large");
  const smallItems = templates.filter((t) => t.size === "small");

  return (
    <section id="templates" className="relative bg-[#060b14] py-16 md:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[420px] h-[420px] bg-[#4ECDC4]/[0.05] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-32 w-[350px] h-[350px] bg-[#0a3d62]/[0.18] rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">06</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">Templates</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Ready-Made <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]">Templates</span>
        </h2>

        <p className="text-sm font-light text-[#9db4c4] mb-12 max-w-xl">
          Professionally crafted website templates for businesses, organizations, startups,
          churches, healthcare services, and personal brands.
        </p>

        {/* FEATURED TEMPLATE — now actually rendered
        <FeaturedCard template={featuredTemplate} /> */}

        {/* Large showcase — 2 cols, the most impressive live demos */}
        <div className="grid sm:grid-cols-2 gap-5 mt-6 mb-6">
          {largeItems.map((template) => (
            <ShowcaseCard key={template.number} template={template} size="large" />
          ))}
        </div>

        {/* Compact grid — remaining templates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {smallItems.map((template) => (
            <ShowcaseCard key={template.number} template={template} size="small" />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeaturedCard({ template }) {
  return (
    <div
      className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm
                 hover:border-[#4ECDC4]/30 hover:shadow-[0_8px_40px_-10px_rgba(78,205,196,0.15)]
                 transition-all duration-300"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%)" }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[260px] md:h-[400px] order-2 lg:order-1">
          <Image
            src={template.image}
            alt={template.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/70 via-[#060b14]/10 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center order-1 lg:order-2">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#4ECDC4] mb-4">
            Featured Template
          </span>

          <h3 className="font-serif text-3xl md:text-4xl text-[#f0f4f7] mb-4">
            {template.title}
          </h3>

          <p className="text-sm text-[#9db4c4] leading-relaxed mb-6 max-w-md">
            {template.description}
          </p>

          <p className="text-[11px] text-[#9db4c4]/70 tracking-wide uppercase mb-8">
            {template.stack.join(" · ")}
          </p>

          <div className="flex flex-wrap gap-5">
            {template.demo === "#" ? (
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#9db4c4]/40">
                Demo Coming Soon
              </span>
            ) : (
              <a
                href={template.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.15em] text-[#4ECDC4] hover:text-[#7fdbd4] transition-colors"
              >
                Live Demo →
              </a>
            )}
            <a
              href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20template%20${encodeURIComponent(template.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.15em] text-[#9db4c4] hover:text-[#f0f4f7] transition-colors"
            >
              Order This Template
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ template, size }) {
  const isLarge = size === "large";

  return (
    <div
      className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] overflow-hidden
                 hover:border-[#4ECDC4]/30 hover:bg-white/[0.05]
                 transition-all duration-300"
    >
      <div className={`relative overflow-hidden ${isLarge ? "h-60" : "h-40"}`}>
        <Image
          src={template.image}
          alt={template.title}
          fill
          sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/70 via-[#060b14]/10 to-transparent" />

        <span className={`absolute top-3 left-3 font-serif font-bold text-white/10 leading-none ${isLarge ? "text-4xl" : "text-3xl"}`}>
          {template.number}
        </span>

        <span
          className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.12em] px-2.5 py-1 bg-[#060b14]/60 backdrop-blur-sm text-[#4ECDC4] border border-white/10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)" }}
        >
          {template.category}
        </span>
      </div>

      <div className={isLarge ? "p-5" : "p-4"}>
        <h3 className={`font-medium text-[#f0f4f7] mb-2 ${isLarge ? "text-base" : "text-[13px]"}`}>
          {template.title}
        </h3>

        {isLarge && (
          <p className="text-[12px] text-[#9db4c4] leading-relaxed mb-3">
            {template.description}
          </p>
        )}

        <p className="text-[10px] text-[#9db4c4]/60 tracking-wide uppercase mb-3">
          {template.stack.join(" · ")}
        </p>

        <div className="flex justify-between items-center">
          {template.demo === "#" ? (
            <span className="text-[10px] uppercase tracking-[0.12em] text-[#9db4c4]/40">
              Coming Soon
            </span>
          ) : (
            <a
              href={template.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.12em] text-[#4ECDC4] hover:text-[#7fdbd4] transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}