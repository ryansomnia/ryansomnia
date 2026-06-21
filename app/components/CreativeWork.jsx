"use client";
import Image from "next/image";
const tiktokVideos = [
  { id: "7591106228818955536", url: "https://www.tiktok.com/@ryansomia/video/7591106228818955536" },
  { id: "7589569429235698952", url: "https://www.tiktok.com/@ryansomia/video/7589569429235698952" },
  { id: "7601780105509113095", url: "https://www.tiktok.com/@ryansomia/video/7601780105509113095" },
];

const igAccounts = [
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
  {
    account: "@90menitplus_",
    role: "Sports Media — Founder & Content Creator",
    url: "https://www.instagram.com/90menitplus_/",
    posts: [
      { image: "/ig/ig-90menitplus-1.png", url: "https://www.instagram.com/p/DP3BDoqk_hJ/" },
      { image: "/ig/ig-90menitplus-2.png", url: "https://www.instagram.com/p/DPZeJ7Gk5qv/" },
      { image: "/ig/ig-90menitplus-3.png", url: "https://www.instagram.com/p/DPZL6zvk8GI/" },
    ],
  },
];

const tools = ["Canva", "CapCut", "Instagram", "TikTok"];

const CreativeWork = () => {
  return (
    <section id="creative" className="bg-[#0a0a0a] py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">05</span>
          <div className="w-8 h-px bg-emerald-300" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Creative Work</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-start mb-16">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Beyond <span className="italic text-emerald-300">Code</span>
            </h2>
            <p className="text-sm font-light text-[#9d9b96] leading-relaxed max-w-sm">
              Outside of engineering, I create visual content — editing videos with CapCut, designing graphics with Canva, and managing social media for multiple accounts.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end items-start pt-2">
            {tools.map((tool) => (
              <span key={tool} className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-white/[0.08] text-[#9d9b96] rounded-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* TikTok */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-300">TikTok — @ryansomia</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <a href="https://www.tiktok.com/@ryansomia" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.12em] text-[#9d9b96] hover:text-emerald-300 transition-colors">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiktokVideos.map(({ id, url }) => (
              <div key={id} className="bg-[#111] border border-white/[0.06] rounded-sm overflow-hidden hover:border-emerald-300/30 transition-colors duration-300">
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  <iframe src={`https://www.tiktok.com/embed/v2/${id}`} className="absolute inset-0 w-full h-full border-0" allowFullScreen allow="encrypted-media" title={`TikTok ${id}`} />
                </div>
                <div className="px-4 py-3 border-t border-white/[0.06]">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[#9d9b96] hover:text-emerald-300 transition-colors">
                    Open in TikTok
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram accounts */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-300">Instagram</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {igAccounts.map(({ account, role, url, posts }) => (
              <div key={account} className="bg-[#111] border border-white/[0.06] rounded-sm p-5 hover:border-emerald-300/30 transition-colors duration-300">

                {/* Account header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-emerald-300 hover:text-emerald-200 transition-colors">
                      {account}
                    </a>
                    <p className="text-[11px] text-[#9d9b96] mt-0.5 leading-relaxed">{role}</p>
                  </div>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="#6ee7b7" />
                    </svg>
                  </a>
                </div>

        {/* Post gallery grid */}
<div className="border-t border-white/[0.06] pt-4 grid grid-cols-3 gap-1.5">
  {posts.map(({ image, url: postUrl }, i) => (
    <a key={i} href={postUrl} target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden rounded-sm group">
<Image
  src={image}
  alt={`${account} post ${i + 1}`}
  fill
  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 15vw, 120px"
  className="object-cover transition-transform duration-300 group-hover:scale-105"
/>      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  ))}
</div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeWork;