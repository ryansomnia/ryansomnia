"use client";
import { FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiApachekafka } from "react-icons/si";

const levelConfig = {
  "MID": { label: "Mid", color: "text-emerald-300", bar: "bg-emerald-300", width: "w-[65%]" },
  "Junior": { label: "Junior", color: "text-amber-300", bar: "bg-amber-300", width: "w-[40%]" },
  "On Learning": { label: "Learning", color: "text-[#9d9b96]", bar: "bg-[#9d9b96]", width: "w-[20%]" },
  "Low Intermediate": { label: "Low–Mid", color: "text-amber-300", bar: "bg-amber-300", width: "w-[35%]" },
};

const skills = [
  { icon: FaJs, name: "JavaScript", level: "MID", category: "Language" },
  { icon: FaNodeJs, name: "Node.js", level: "MID", category: "Runtime" },
  { icon: FaReact, name: "React / RN", level: "Junior", category: "Frontend" },
  { icon: SiMysql, name: "MySQL", level: "MID", category: "Database" },
  { icon: SiMicrosoftsqlserver, name: "SQL Server", level: "MID", category: "Database" },
  { icon: SiMongodb, name: "MongoDB", level: "Junior", category: "Database" },
  { icon: SiApachekafka, name: "Kafka", level: "MID", category: "Messaging" },
  { icon: FaJava, name: "Java", level: "On Learning", category: "Language" },
  { icon: FaGolang, name: "Golang", level: "On Learning", category: "Language" },
  { icon: RiEnglishInput, name: "English", level: "Low Intermediate", category: "Language" },
];

const Stack = () => {
  return (
    <section id="stack" className="bg-[#0a0a0a] py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9b96]">03</span>
          <div className="w-8 h-px bg-emerald-300" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Tech Stack</span>
        </div>

        <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-3">
          My <span className="italic text-emerald-300">Skills</span>
        </h2>
        <p className="text-sm font-light text-[#9d9b96] mb-14 max-w-md">
          Technologies I work with daily and others I am actively exploring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const cfg = levelConfig[skill.level];
            return (
              <div key={skill.name} className="group flex items-center gap-4 p-4 bg-[#111] border border-white/[0.06] rounded-sm hover:border-emerald-300/30 transition-colors duration-300">

                {/* Icon */}
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#1a1a1a] rounded-sm border border-white/[0.06] group-hover:border-emerald-300/20 transition-colors">
                  <Icon size={20} className={cfg.color} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <p className="text-[13px] font-medium text-[#f0ede6] truncate">{skill.name}</p>
                    <span className={`text-[10px] uppercase tracking-[0.12em] shrink-0 ml-2 ${cfg.color}`}>
                      {cfg.label}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-px bg-white/[0.08]">
                    <div className={`h-px ${cfg.bar} ${cfg.width} transition-all duration-500`} />
                  </div>
                  <p className="text-[10px] text-[#9d9b96] mt-1.5 uppercase tracking-[0.1em]">{skill.category}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stack;