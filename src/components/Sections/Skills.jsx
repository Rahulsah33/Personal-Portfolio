import React from "react";
import {
  Server,
  Database,
  Layout,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  Code2,
  Wrench,
  Sparkles,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import { skillsData } from "../../data/content";

const iconMap = {
  Server: Server,
  Database: Database,
  Layout: Layout,
  Terminal: Terminal,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Code2: Code2,
  Wrench: Wrench,
  Sparkles: Sparkles,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 border-b border-border bg-canvas-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <Layers className="w-4 h-4" /> Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Core stack & tooling{" "}
              <span className="font-editorial italic font-normal text-primary">
                competencies.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted uppercase">
            SEC // 03 — TECH STACK
          </p>
        </div>

        {/* Categorized Technical Matrix with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Server;

            return (
              <Card3D
                key={idx}
                maxTilt={6}
                scale={1.01}
                className="h-full rounded-3xl"
              >
                <div className="bg-surface border border-border rounded-3xl p-6 sm:p-7 shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center border border-primary/20">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold font-display text-ink">
                          {cat.name}
                        </h3>
                      </div>

                      <span className="text-[10px] font-mono text-ink-faint">
                        MOD-0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs text-ink-muted mb-5 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill Badges List */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-canvas-subtle border border-border text-xs font-medium text-ink hover:border-primary/40 transition-colors"
                        >
                          <span>{skill.name}</span>
                          {skill.tag && (
                            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-surface border border-border/80 text-ink-muted">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="border-y border-border bg-surface py-5 overflow-hidden">
        <div className="animate-ticker">
          {[
            ...skillsData.marquee,
            ...skillsData.marquee,
            ...skillsData.marquee,
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 mx-6 text-sm font-mono uppercase tracking-wider text-ink-muted hover:text-primary transition-colors cursor-default"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
