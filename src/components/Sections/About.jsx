import React from "react";
import { Database, ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";
import Card3D from "../ui/Card3D";
import { personalData } from "../../data/content";

const principles = [
  {
    icon: Database,
    title: "Relational Schema Integrity",
    description:
      "I prioritize normalized schemas, ACID guarantees, and foreign-key constraints. Clean data models prevent downstream architectural friction.",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic API Contracts",
    description:
      "Building predictable RESTful endpoints with explicit HTTP status codes, structured error envelopes, and tight DTO validations.",
  },
  {
    icon: Cpu,
    title: "Performance & Resource Care",
    description:
      "Mindful of JVM memory allocation, thread life cycles, parameterized queries, and indexed lookups to avoid bottlenecks.",
  },
  {
    icon: Code2,
    title: "Maintainable OOP Architecture",
    description:
      "Applying SOLID principles, service-layer separation, and clean dependency injection so systems stay easy to debug and test.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 border-b border-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <Sparkles className="w-4 h-4" /> Philosophy & Background
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Engineered for reliability,{" "}
              <span className="font-editorial italic font-normal text-primary">
                layer by layer.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted uppercase">
            SEC // 02 — ARCHITECTURE
          </p>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: First-Person Bio Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <Card3D maxTilt={5} scale={1.01} className="rounded-3xl">
              <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm space-y-5">
                <div className="text-xs font-mono uppercase tracking-widest text-ink-faint font-semibold">
                  Engineering Statement
                </div>

                {personalData.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-ink-muted leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 border-t border-border/80 flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span>Education Track:</span>
                  <span className="text-ink font-semibold">B.Tech CSE (2022–2026)</span>
                </div>
              </div>
            </Card3D>

            {/* Quick Stat Pill */}
            <div className="p-6 rounded-2xl bg-canvas-subtle border border-border flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold font-display text-ink">7+</div>
                <div className="text-xs font-mono text-ink-muted uppercase">Engineered Projects</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold font-display text-primary">100%</div>
                <div className="text-xs font-mono text-ink-muted uppercase">Commitment to Craft</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars with 3D Tilt */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card3D
                  key={idx}
                  maxTilt={8}
                  scale={1.02}
                  className="h-full rounded-2xl"
                >
                  <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 transition-all flex flex-col justify-between h-full shadow-xs">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center mb-4 border border-primary/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold font-display text-ink mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/60 text-[10px] font-mono text-ink-faint uppercase">
                      Pillar 0{idx + 1}
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
