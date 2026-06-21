"use client";
import { FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiApachekafka } from "react-icons/si";

// dots out of 5, instead of a percentage bar
const levelConfig = {
  "MID": { label: "Mid", color: "text-[#4ECDC4]", dot: "bg-[#4ECDC4]", glow: "shadow-[0_0_6px_rgba(78,205,196,0.7)]", filled: 3 },
  "Junior": { label: "Junior", color: "text-[#7fb3d5]", dot: "bg-[#7fb3d5]", glow: "shadow-[0_0_6px_rgba(127,179,213,0.5)]", filled: 2 },
  "On Learning": { label: "Learning", color: "text-[#9db4c4]", dot: "bg-[#9db4c4]", glow: "", filled: 1 },
  "Low Intermediate": { label: "Low–Mid", color: "text-[#7fb3d5]", dot: "bg-[#7fb3d5]", glow: "shadow-[0_0_6px_rgba(127,179,213,0.5)]", filled: 2 },
};

const groups = [
  {
    category: "Languages",
    skills: [
      { icon: FaJs, name: "JavaScript", level: "MID" },
      { icon: FaJava, name: "Java", level: "On Learning" },
      { icon: FaGolang, name: "Golang", level: "On Learning" },
      { icon: RiEnglishInput, name: "English", level: "Low Intermediate" },
    ],
  },
  {
    category: "Runtime & Frontend",
    skills: [
      { icon: FaNodeJs, name: "Node.js", level: "MID" },
      { icon: FaReact, name: "React / RN", level: "Junior" },
    ],
  },
  {
    category: "Database & Messaging",
    skills: [
      { icon: SiMysql, name: "MySQL", level: "MID" },
      { icon: SiMicrosoftsqlserver, name: "SQL Server", level: "MID" },
      { icon: SiMongodb, name: "MongoDB", level: "Junior" },
      { icon: SiApachekafka, name: "Kafka", level: "MID" },
    ],
  },
];

const DotRating = ({ filled, color }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          i < filled ? color : "bg-white/10"
        }`}
      />
    ))}
  </div>
);

const Stack = () => {
  return (
    <section id="stack" className="relative bg-[#060b14] py-24 px-6 lg:px-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-10 right-0 w-[380px] h-[380px] bg-[#4ECDC4]/[0.05] rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#0a3d62]/[0.15] rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9db4c4]">03</span>
          <div className="w-8 h-px bg-[#4ECDC4]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ECDC4]">Tech Stack</span>
        </div>

        <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-3">
          My <span className="italic text-[#4ECDC4] drop-shadow-[0_0_20px_rgba(78,205,196,0.3)]">Skills</span>
        </h2>
        <p className="text-sm font-light text-[#9db4c4] mb-16 max-w-md">
          Technologies I work with daily, grouped by domain — and others I am actively exploring.
        </p>

        {/* Grouped by category, each with its own heading */}
        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <div key={group.category}>
              <div className="flex items-baseline gap-3 mb-5">
                <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#f0f4f7] font-medium">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-[10px] text-[#9db4c4]/60 tracking-wide">{group.skills.length} skills</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  const cfg = levelConfig[skill.level];
                  return (
                    <div
                      key={skill.name}
                      className="group relative flex flex-col gap-3 p-4 bg-white/[0.03] backdrop-blur-sm border border-white/[0.07]
                                 hover:border-[#4ECDC4]/30 hover:bg-white/[0.05]
                                 transition-all duration-300"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 14% 100%, 0 86%)" }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-white/[0.04] rounded-sm border border-white/[0.07] group-hover:border-[#4ECDC4]/25 transition-colors duration-300">
                          <Icon size={17} className={cfg.color} />
                        </div>
                        <span className={`text-[9px] uppercase tracking-[0.1em] ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </div>

                      <div>
                        <p className="text-[13px] font-medium text-[#f0f4f7] mb-2">{skill.name}</p>
                        <DotRating filled={cfg.filled} color={`${cfg.dot} ${cfg.glow}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;