"use client";
import Image from "next/image";

const tiktokVideos = [
  { id: "7591106228818955536", url: "https://www.tiktok.com/@ryansomia/video/7591106228818955536" },
  { id: "7589569429235698952", url: "https://www.tiktok.com/@ryansomia/video/7589569429235698952" },
  { id: "7601780105509113095", url: "https://www.tiktok.com/@ryansomia/video/7601780105509113095" },
];

const igAccounts = [
  {
    account: "@90menitplus_",
    role: "Sports Media — Founder & Content Creator",
    url: "https://www.instagram.com/90menitplus_/",
    featured: true,
    posts: [
      { image: "/ig/ig-90menitplus-1.png", url: "https://www.instagram.com/p/DP3BDoqk_hJ/" },
      { image: "/ig/ig-90menitplus-2.png", url: "https://www.instagram.com/p/DPZeJ7Gk5qv/" },
      { image: "/ig/ig-90menitplus-3.png", url: "https://www.instagram.com/p/DPZL6zvk8GI/" },
    ],
  },
  {
    account: "@ryansomia",
    role: "Personal — Canva & CapCut Content",
    url: "https://www.instagram.com/ryansomia/",
    posts: [
      { image: "/ig/ig-ryansomia-1.png", url: "https://www.instagram.com/p/DI7NH6rz1cw/" },
      { image: "/ig/ig-ryansomia-2.png", url: "https://www.instagram.com/p/DCzNtZGTorK/" },
      { image: "/ig/ig-ryansomia-3.png", url: "https://www.instagram.com/p/CxTQggoSwIa/" },
    ],
  },
  {
    account: "@gppkcbn",
    role: "Church — Social Media Manager & Designer",
    url: "https://www.instagram.com/gppkcbn/",
    posts: [
      { image: "/ig/ig-gppk-1.png", url: "https://www.instagram.com/p/DMhd6RZhFHn/" },
      { image: "/ig/ig-gppk-2.png", url: "https://www.instagram.com/p/DMjn1aTBsSQ/" },
      { image: "/ig/ig-gppk-3.png", url: "https://www.instagram.com/p/DK4t5z9Blci/" },
    ],
  },
  {
    account: "@youthgppkcbn",
    role: "Church Youth — Social Media Manager & Designer",
    url: "https://www.instagram.com/youthgppkcbn/",
    posts: [
      { image: "/ig/ig-youthgppk-1.png", url: "https://www.instagram.com/p/DJJMo8BpUHt/" },
      { image: "/ig/ig-youthgppk-2.png", url: "https://www.instagram.com/p/DI3LAfDzWEa/" },
      { image: "/ig/ig-youthgppk-3.png", url: "https://www.instagram.com/p/DEb83LKyteo/" },
    ],
  },
];

const tools = ["Canva", "CapCut", "Instagram", "TikTok"];

const CreativeWork = () => {
  const featured = igAccounts.find((a) => a.featured);
  const rest = igAccounts.filter((a) => !a.featured);

  return (
    <section id="creative" className="relative bg-[#060b14] py-24 px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-10 -right-40 w-[420px] h-[420px] bg-[#4ECDC4]/[0.05] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[320px] h-[320px] bg-[#0a3d62]/[0.15] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">07</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">Creative Work</span>
        </div>

        {/* Header — asymmetric, heading larger / tools as a side strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Beyond <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]">Code</span>
            </h2>
            <p className="text-sm font-light text-[#9db4c4] leading-relaxed max-w-md">
              Outside of engineering, I create visual content — editing videos with CapCut, designing graphics with Canva, and managing social media for multiple accounts.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] text-[#9db4c4]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* TikTok — horizontal scroll-snap carousel instead of a static grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#4ECDC4]">TikTok — @ryansomia</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <a
              href="https://www.tiktok.com/@ryansomia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.12em] text-[#9db4c4] hover:text-[#4ECDC4] transition-colors"
            >
              View All
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10">
            {tiktokVideos.map(({ id, url }) => (
              <div
                key={id}
                className="snap-start shrink-0 w-[220px] sm:w-[260px] bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] overflow-hidden
                           hover:border-[#4ECDC4]/30 transition-colors duration-300"
              >
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${id}`}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    allow="encrypted-media"
                    title={`TikTok ${id}`}
                  />
                </div>
                <div className="px-4 py-3 border-t border-white/[0.06]">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[#9db4c4] hover:text-[#4ECDC4] transition-colors"
                  >
                    Open in TikTok
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            {/* trailing spacer so the last card doesn't snap flush against the edge */}
            <div className="shrink-0 w-1" />
          </div>
        </div>

        {/* Instagram — featured account full width, rest in a row */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#4ECDC4]">Instagram</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {featured && <FeaturedIgCard account={featured} />}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {rest.map((acc) => (
              <IgCard key={acc.account} account={acc} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const FeaturedIgCard = ({ account }) => {
  const { account: handle, role, url, posts } = account;
  return (
    <div
      className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] p-6 grid sm:grid-cols-[1fr_auto] gap-6 items-center
                 hover:border-[#4ECDC4]/30 transition-colors duration-300"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 97% 100%, 0 100%)" }}
    >
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4ECDC4] hover:text-[#7fdbd4] transition-colors">
            {handle}
          </a>
          <span className="text-[9px] uppercase tracking-[0.12em] text-[#9db4c4]/60 px-2 py-0.5 border border-white/10">
            Founder Project
          </span>
        </div>
        <p className="text-[12px] text-[#9db4c4] leading-relaxed">{role}</p>
      </div>

      <div className="flex gap-2">
        {posts.map(({ image, url: postUrl }, i) => (
          <a key={i} href={postUrl} target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden group shrink-0">
            <Image src={image} alt={`${handle} post ${i + 1}`} fill sizes="96px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#060b14]/0 group-hover:bg-[#060b14]/30 transition-colors duration-300 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const IgCard = ({ account }) => {
  const { account: handle, role, url, posts } = account;
  return (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] p-5 hover:border-[#4ECDC4]/30 transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[#4ECDC4] hover:text-[#7fdbd4] transition-colors">
            {handle}
          </a>
          <p className="text-[11px] text-[#9db4c4] mt-0.5 leading-relaxed">{role}</p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="#4ECDC4" />
          </svg>
        </a>
      </div>

      <div className="border-t border-white/[0.06] pt-4 grid grid-cols-3 gap-1.5">
        {posts.map(({ image, url: postUrl }, i) => (
          <a key={i} href={postUrl} target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden group">
            <Image
              src={image}
              alt={`${handle} post ${i + 1}`}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 15vw, 120px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#060b14]/0 group-hover:bg-[#060b14]/30 transition-colors duration-300 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CreativeWork;