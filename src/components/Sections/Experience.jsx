import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "../../data/content";

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-b border-border bg-canvas-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <Briefcase className="w-4 h-4" /> Career Journey
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Experience & practical{" "}
              <span className="font-editorial italic font-normal text-primary">
                engineering track.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted uppercase">
            SEC // 05 — CHRONOLOGY
          </p>
        </div>

        {/* Timeline Ledger */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-3xl p-6 sm:p-8 hover:border-border-strong transition-all shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h3 className="text-xl font-bold font-display text-ink">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary-subtle text-primary border border-primary/20">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-ink-muted flex flex-wrap items-center gap-3">
                    <span>{exp.organization}</span>
                    <span className="text-ink-faint">•</span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-ink-faint" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas-subtle border border-border text-xs font-mono text-ink-muted self-start">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-ink-muted leading-relaxed mb-6 max-w-4xl">
                {exp.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/70">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-canvas-subtle text-ink-muted border border-border/70"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
