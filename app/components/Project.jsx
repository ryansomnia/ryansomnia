"use client";
import Image from "next/image";

const projects = [
  {
    title: "Hospital QR Web",
    image: "/qr.png",
    stack: ["React", "Node.js", "MongoDB", "QR Code"],
    highlight: "Web app that generates PCR test documents with QR codes for hospital verification.",
    links: [],
    number: "01",
  },
  {
    title: "Church Website",
    image: "/gppk.png",
    stack: ["React.js", "Node.js", "MySQL"],
    highlight: "Shares upcoming events, streams services, and manages community with ease.",
    links: [{ label: "Visit Site", url: "https://gppkcbn.org" }],
    number: "02",
  },
  {
    title: "Sekolah Cerdas Bangsa",
    image: "/webcerdasbangsa.png",
    stack: ["React.js", "Node.js", "MySQL"],
    highlight: "Landing page for a private school with an admin panel for content management.",
    links: [{ label: "Visit Site", url: "https://sekolahcerdasbangsa.sch.id" }],
    number: "03",
  },
  {
    title: "BRI Life MyAccess",
    image: "/myaccess.png",
    stack: ["Node.js", "MSSQL", "JavaScript"],
    highlight: "Backend for a mobile app serving BRI Life policyholders — policy info, transactions, and secure services.",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.myaccessrevamp&hl=id" },
      { label: "App Store", url: "https://apps.apple.com/id/app/myaccess-by-bri-life/id6743779223" },
    ],
    number: "04",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-16 md:py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">04</span>
          <div className="w-8 h-px bg-emerald-300" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Projects</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          My <span className="italic text-emerald-300">Work</span>
        </h2>
        <p className="text-sm font-light text-[#9d9b96] mb-10 md:mb-14 max-w-md">
          A selection of projects built professionally and as freelance work.
        </p>

        {/* Project list — alternating layout on desktop */}
        <div className="flex flex-col gap-4">

          {/* First 2 — side by side on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>

          {/* Project 3 — full width, landscape */}
          <ProjectCardWide project={projects[2]} />

          {/* Project 4 — full width, landscape */}
          <ProjectCardWide project={projects[3]} />

        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group relative bg-[#111] border border-white/[0.06] rounded-sm overflow-hidden hover:border-emerald-300/30 transition-colors duration-300 flex flex-col">
    <div className="relative w-full h-44 sm:h-48 overflow-hidden shrink-0">
      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[#0a0a0a]/40" />
      <span className="absolute top-4 left-4 font-serif text-4xl font-bold text-white/10 leading-none select-none">
        {project.number}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-sm font-medium text-[#f0ede6] mb-2">{project.title}</h3>
      <p className="text-[12px] font-light text-[#9d9b96] leading-relaxed mb-4 flex-1">{project.highlight}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 border border-white/[0.08] text-[#9d9b96] rounded-sm">
            {tech}
          </span>
        ))}
      </div>
      <ProjectLinks links={project.links} />
    </div>
  </div>
);

const ProjectCardWide = ({ project }) => (
  <div className="group relative bg-[#111] border border-white/[0.06] rounded-sm overflow-hidden hover:border-emerald-300/30 transition-colors duration-300 grid grid-cols-1 sm:grid-cols-[2fr_3fr]">
    <div className="relative w-full h-48 sm:h-full min-h-[180px] overflow-hidden">
      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[#0a0a0a]/40" />
      <span className="absolute top-4 left-4 font-serif text-4xl font-bold text-white/10 leading-none select-none">
        {project.number}
      </span>
    </div>
    <div className="p-5 sm:p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-medium text-[#f0ede6] mb-2">{project.title}</h3>
        <p className="text-[12px] font-light text-[#9d9b96] leading-relaxed mb-4">{project.highlight}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 border border-white/[0.08] text-[#9d9b96] rounded-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <ProjectLinks links={project.links} />
    </div>
  </div>
);

const ProjectLinks = ({ links }) => (
  links.length > 0 ? (
    <div className="flex flex-wrap gap-4">
      {links.map(({ label, url }) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-emerald-300 hover:text-emerald-200 transition-colors">
          {label}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  ) : (
    <span className="text-[11px] uppercase tracking-[0.12em] text-[#9d9b96]/40">Private Project</span>
  )
);

export default ProjectSection;