"use client";
import Image from "next/image";

const projects = [
  {
    title: "BRI Life MyAccess",
    image: "/templates/myaccess.png",
    stack: ["Node.js", "MSSQL", "JavaScript"],
    highlight: "Backend for a mobile app serving BRI Life policyholders — policy info, transactions, and secure services.",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.myaccessrevamp&hl=id" },
      { label: "App Store", url: "https://apps.apple.com/id/app/myaccess-by-bri-life/id6743779223" },
    ],
    number: "01",
    featured: true,
  },
  {
    title: "Hospital QR Web",
    image: "/templates/qr.png",
    stack: ["React", "Node.js", "MongoDB", "QR Code"],
    highlight: "Web app that generates PCR test documents with QR codes for hospital verification.",
    links: [],
    number: "02",
  },
  {
    title: "Church Website",
    image: "/templates/church.png",
    stack: ["React.js", "Node.js", "MySQL"],
    highlight: "Shares upcoming events, streams services, and manages community with ease.",
    links: [{ label: "Visit Site", url: "https://gppkcbn.org" }],
    number: "03",
  },
  {
    title: "Sekolah Cerdas Bangsa",
    image: "/templates/school.png",
    stack: ["React.js", "Node.js", "MySQL"],
    highlight: "Landing page for a private school with an admin panel for content management.",
    links: [{ label: "Visit Site", url: "https://sekolahcerdasbangsa.sch.id" }],
    number: "04",
  },
];

const ProjectSection = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative bg-[#060b14] py-16 md:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 -right-40 w-[450px] h-[450px] bg-[#4ECDC4]/[0.05] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 -left-32 w-[350px] h-[350px] bg-[#0a3d62]/[0.18] rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">04</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">Projects</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          My <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]">Work</span>
        </h2>
        <p className="text-sm font-light text-[#9db4c4] mb-12 md:mb-16 max-w-md">
          A selection of projects built professionally and as freelance work.
        </p>

        {/* Featured project — full width, hero-style */}
        {featured && <FeaturedCard project={featured} />}

        {/* Rest — editorial list, no boxed grid */}
        <div className="flex flex-col mt-4">
          {rest.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

const FeaturedCard = ({ project }) => (
  <div
    className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] mb-4
               hover:border-[#4ECDC4]/30 hover:shadow-[0_8px_40px_-10px_rgba(78,205,196,0.15)]
               transition-all duration-300"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%)" }}
  >
    <div className="relative w-full h-64 lg:h-full min-h-[280px] overflow-hidden order-2 lg:order-1">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/50 via-transparent to-transparent lg:bg-gradient-to-r" />
    </div>
    <div className="p-7 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
      <span className="text-[10px] uppercase tracking-[0.16em] text-[#4ECDC4] mb-3">Featured Work</span>
      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#f0f4f7] mb-3">{project.title}</h3>
      <p className="text-[13px] font-light text-[#9db4c4] leading-relaxed mb-5 max-w-md">{project.highlight}</p>
      <p className="text-[11px] text-[#9db4c4]/70 tracking-wide mb-6">
        {project.stack.join(" · ")}
      </p>
      <ProjectLinks links={project.links} />
    </div>
  </div>
);

const ProjectRow = ({ project }) => (
  <div className="group relative flex flex-col sm:flex-row gap-5 sm:gap-8 py-6 border-t border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-300">

    {/* Index number — editorial style, echoes BioData freelance list */}
    <span className="font-serif text-3xl font-bold text-white/[0.07] leading-none shrink-0 w-8 group-hover:text-[#4ECDC4]/20 transition-colors duration-300">
      {project.number}
    </span>

    {/* Thumbnail */}
    <div className="relative w-full sm:w-40 h-32 sm:h-24 shrink-0 overflow-hidden rounded-sm border border-white/[0.07] group-hover:border-[#4ECDC4]/25 transition-colors duration-300">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="160px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-[#f0f4f7] mb-1.5">{project.title}</h3>
        <p className="text-[12px] font-light text-[#9db4c4] leading-relaxed mb-2 max-w-md">{project.highlight}</p>
        <p className="text-[10px] text-[#9db4c4]/60 tracking-wide uppercase">
          {project.stack.join(" · ")}
        </p>
      </div>
      <div className="shrink-0">
        <ProjectLinks links={project.links} />
      </div>
    </div>
  </div>
);

const ProjectLinks = ({ links }) => (
  links.length > 0 ? (
    <div className="flex flex-wrap gap-4">
      {links.map(({ label, url }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-[#4ECDC4] hover:text-[#7fdbd4] transition-colors"
        >
          {label}
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          >
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  ) : (
    <span className="text-[11px] uppercase tracking-[0.12em] text-[#9db4c4]/40">Private Project</span>
  )
);

export default ProjectSection;