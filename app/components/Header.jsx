"use client";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative min-h-screen bg-[#060b14] text-[#f0f4f7] overflow-hidden pt-16">

      {/* Animated wave layers — full bleed background, replaces grid pattern entirely */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.14]" viewBox="0 0 1200 500" preserveAspectRatio="none" fill="none">
          <path d="M0 220 C 200 120, 380 320, 600 220 C 820 120, 1000 280, 1200 180 L 1200 500 L 0 500 Z" fill="#4ECDC4">
            <animate
              attributeName="d"
              dur="14s"
              repeatCount="indefinite"
              values="
                M0 220 C 200 120, 380 320, 600 220 C 820 120, 1000 280, 1200 180 L 1200 500 L 0 500 Z;
                M0 200 C 220 280, 360 140, 600 240 C 800 320, 1020 160, 1200 220 L 1200 500 L 0 500 Z;
                M0 220 C 200 120, 380 320, 600 220 C 820 120, 1000 280, 1200 180 L 1200 500 L 0 500 Z"
            />
          </path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[45%] opacity-[0.12]" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
          <path d="M0 160 C 240 260, 420 80, 660 180 C 880 270, 1040 120, 1200 160 L 1200 400 L 0 400 Z" fill="#0a3d62">
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="
                M0 160 C 240 260, 420 80, 660 180 C 880 270, 1040 120, 1200 160 L 1200 400 L 0 400 Z;
                M0 180 C 220 90, 440 250, 660 160 C 860 90, 1020 260, 1200 190 L 1200 400 L 0 400 Z;
                M0 160 C 240 260, 420 80, 660 180 C 880 270, 1040 120, 1200 160 L 1200 400 L 0 400 Z"
            />
          </path>
        </svg>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[420px] h-[420px] bg-[#4ECDC4]/[0.08] rounded-full blur-[130px]" />

      {/* Asymmetric grid: 3fr text / 2fr visual, overlapping rather than split */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[3fr_2fr] gap-10 min-h-[calc(100vh-4rem)] items-center py-16">

        {/* Text column */}
        <div className="flex flex-col">

          {/* Badge with cut corner instead of pill */}
          <div
            className="inline-flex items-center gap-2 mb-8 self-start bg-white/[0.04] backdrop-blur-md border border-white/10 px-4 py-1.5 shadow-[0_0_20px_-5px_rgba(78,205,196,0.15)]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)" }}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#4ECDC4] opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#4ECDC4]" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#4ECDC4]">
              Available for work
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
            Heriyanto<br />
            <span className="italic text-[#4ECDC4] drop-shadow-[0_0_25px_rgba(78,205,196,0.35)]">
              Sitorus.
            </span>
          </h1>

          <div className="w-12 h-0.5 bg-gradient-to-r from-[#4ECDC4] to-transparent my-5" />

          <p className="text-sm font-light leading-relaxed text-[#9db4c4] max-w-sm mb-10">
            Software Engineer with a passion for building elegant, scalable systems.
            Experienced in Node.js, React, SQL, and Kafka — and always eager to learn what&apos;s next.
          </p>

          <div className="flex gap-4 mb-14">
            <a
              href="#projects"
              className="relative text-[11px] uppercase tracking-[0.1em] font-medium bg-[#4ECDC4] text-[#060b14] px-6 py-3
                         shadow-[0_0_25px_-5px_rgba(78,205,196,0.5)]
                         hover:shadow-[0_0_35px_-3px_rgba(78,205,196,0.7)] hover:-translate-y-0.5
                         transition-all duration-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 70%)" }}
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              className="text-[11px] uppercase tracking-[0.1em] font-light bg-white/[0.03] backdrop-blur-md
                         border border-white/10 text-[#9db4c4] px-6 py-3 rounded-sm
                         hover:text-[#f0f4f7] hover:border-[#4ECDC4]/30 hover:bg-white/[0.06]
                         transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Stats — horizontal strip, integrated under CTAs instead of floating on the photo */}
          <div className="flex gap-3 max-w-md">
            <div className="flex-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-sm px-5 py-3.5 border-l-2 border-l-[#4ECDC4]">
              <p className="font-serif text-2xl font-bold text-[#f0f4f7] leading-none">5+</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#9db4c4] mt-1">Years exp.</p>
            </div>
            <div className="flex-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-sm px-5 py-3.5 border-l-2 border-l-[#0a3d62]">
              <p className="font-serif text-2xl font-bold text-[#f0f4f7] leading-none">20+</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#9db4c4] mt-1">Projects</p>
            </div>
          </div>
        </div>

        {/* Visual column — photo with organic clip, no border box, overlapping the text column slightly on desktop */}
        <div className="relative hidden md:flex items-center justify-center md:-ml-10">

          <div className="absolute w-80 h-80 bg-[#4ECDC4]/15 rounded-full blur-[100px] z-0" />

          <div className="relative w-64 h-80">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                clipPath:
                  "path('M0,70 C0,25 25,0 70,0 L210,0 C255,0 280,30 280,75 L280,250 C280,300 250,320 200,310 C155,300 110,330 60,315 C20,303 0,280 0,235 Z')",
              }}
            >
              <Image
                src="/head.jpg"
                alt="Heriyanto Sitorus"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/40 via-transparent to-transparent" />
            </div>

            {/* Floating tag, positioned over the organic edge */}
            <span
              className="absolute -left-4 bottom-10 bg-[#4ECDC4] text-[#060b14] text-[10px] uppercase tracking-[0.12em] font-medium px-3 py-1.5 shadow-[0_0_20px_-4px_rgba(78,205,196,0.6)]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 6% 100%, 0 75%)" }}
            >
              Software Developer
            </span>

            {/* Wave accent beneath the photo, echoing the logo */}
            <svg className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-4" viewBox="0 0 160 16" fill="none">
              <path d="M0 8 Q 20 0, 40 8 T 80 8 T 120 8 T 160 8" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;