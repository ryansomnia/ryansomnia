"use client";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative min-h-screen bg-[#0a0a0a] text-[#f0ede6] grid md:grid-cols-2 pt-16 overflow-hidden">

      {/* Ambient glow layers (global, behind everything) */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[480px] h-[480px] bg-emerald-400/10 rounded-full blur-[140px]" />

      <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 py-20">

        {/* Glass pill badge */}
        <div className="inline-flex items-center gap-2 mb-8 self-start bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-[0_0_20px_-5px_rgba(110,231,183,0.15)]">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-300 opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-300" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-emerald-300">
            Available for work
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
          Heriyanto<br />
          <span className="italic text-emerald-300 drop-shadow-[0_0_25px_rgba(110,231,183,0.35)]">
            Sitorus.
          </span>
        </h1>

        <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-300 to-transparent my-5" />

        <p className="text-sm font-light leading-relaxed text-[#9d9b96] max-w-sm mb-10">
          Software Engineer with a passion for building elegant, scalable systems.
          Experienced in Node.js, React, SQL, and Kafka — and always eager to learn what&apos;s next.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="relative text-[11px] uppercase tracking-[0.1em] font-medium bg-emerald-300 text-[#0a0a0a] px-6 py-3 rounded-sm
                       shadow-[0_0_25px_-5px_rgba(110,231,183,0.5)]
                       hover:shadow-[0_0_35px_-3px_rgba(110,231,183,0.7)] hover:-translate-y-0.5
                       transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            className="text-[11px] uppercase tracking-[0.1em] font-light bg-white/[0.03] backdrop-blur-md
                       border border-white/10 text-[#9d9b96] px-6 py-3 rounded-sm
                       hover:text-[#f0ede6] hover:border-emerald-300/30 hover:bg-white/[0.06]
                       transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="relative hidden md:flex items-center justify-center bg-[#111] border-l border-white/[0.06] overflow-hidden">

        {/* Grid pattern with radial fade mask */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />

        {/* Glow directly behind the portrait */}
        <div className="absolute w-72 h-72 bg-emerald-400/15 rounded-full blur-[100px] z-0" />

        <div className="relative z-10">
          <div className="relative w-48 h-60">
            {/* Gradient ring behind image */}
            <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-br from-emerald-300/40 via-emerald-300/5 to-transparent" />

            <Image
              src="/head.jpg"
              alt="Heriyanto Sitorus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-sm border border-emerald-300/20 relative"
            />

            <div className="absolute -bottom-3 -right-3 w-48 h-60 border border-emerald-300/20 rounded-sm -z-10" />

            <span className="absolute -left-px bottom-4 bg-emerald-300 text-[#0a0a0a] text-[10px] uppercase tracking-[0.12em] font-medium px-2.5 py-1 shadow-[0_0_20px_-4px_rgba(110,231,183,0.6)]">
              Software Developer
            </span>
          </div>
        </div>

        {/* Stats as glass cards */}
        <div className="absolute bottom-10 right-10 flex flex-col gap-3 text-right z-10">
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-sm px-5 py-3">
            <p className="font-serif text-3xl font-bold text-[#f0ede6] leading-none">5+</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#9d9b96] mt-1">Years exp.</p>
          </div>
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-sm px-5 py-3">
            <p className="font-serif text-3xl font-bold text-[#f0ede6] leading-none">20+</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#9d9b96] mt-1">Projects</p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;