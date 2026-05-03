"use client";
import Image from "next/image";

const Header = () => {
  return (
    <header className="min-h-screen bg-[#0a0a0a] text-[#f0ede6] grid md:grid-cols-2 pt-16">

      <div className="flex flex-col justify-center px-10 md:px-16 py-20">

        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-emerald-300">
            Available for work
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
          Heriyanto<br />
          <span className="italic text-emerald-300">Sitorus.</span>
        </h1>

        <div className="w-12 h-0.5 bg-emerald-300 my-5 opacity-60" />

        <p className="text-sm font-light leading-relaxed text-[#9d9b96] max-w-sm mb-10">
          Software Engineer with a passion for building elegant, scalable systems.
          Experienced in Node.js, React, SQL, and Kafka — and always eager to learn what&apos;s next.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="text-[11px] uppercase tracking-[0.1em] font-medium bg-emerald-300 text-[#0a0a0a] px-6 py-3 rounded-sm hover:opacity-80 transition-opacity">
            View Projects
          </a>
          <a href="/cv.pdf" className="text-[11px] uppercase tracking-[0.1em] font-light border border-white/20 text-[#9d9b96] px-6 py-3 rounded-sm hover:text-[#f0ede6] hover:border-white/40 transition-all">
            Download CV
          </a>
        </div>
      </div>

      <div className="relative hidden md:flex items-center justify-center bg-[#111] border-l border-white/[0.06] overflow-hidden">

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <div className="relative w-48 h-60">
            <Image
              src="/head.jpg"
              alt="Heriyanto Sitorus"
              fill
              className="object-cover rounded-sm border border-emerald-300/20"
            />
            <div className="absolute -bottom-3 -right-3 w-48 h-60 border border-emerald-300/20 rounded-sm -z-10" />
            <span className="absolute -left-px bottom-4 bg-emerald-300 text-[#0a0a0a] text-[10px] uppercase tracking-[0.12em] font-medium px-2.5 py-1">
              Software Developer
            </span>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col gap-5 text-right z-10">
          <div>
            <p className="font-serif text-3xl font-bold text-[#f0ede6] leading-none">5+</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#9d9b96] mt-1">Years exp.</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-[#f0ede6] leading-none">20+</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#9d9b96] mt-1">Projects</p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;