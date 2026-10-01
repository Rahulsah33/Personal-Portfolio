import React from "react";
import { GraduationCap, BookOpen, MapPin, Calendar, Award } from "lucide-react";
import Card3D from "../ui/Card3D";
import { educationData, certificationsData } from "../../data/content";

const Education = () => {
  return (
    <section id="education" className="py-24 border-b border-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <GraduationCap className="w-4 h-4" /> Academic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Education & core{" "}
              <span className="font-editorial italic font-normal text-primary">
                computer science.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted uppercase">
            SEC // 06 — ACADEMICS
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, idx) => (
            <Card3D
              key={idx}
              maxTilt={6}
              scale={1.01}
              className="h-full rounded-3xl"
            >
              <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 hover:border-primary/40 transition-colors flex flex-col justify-between h-full shadow-xs">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center border border-primary/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-canvas-subtle border border-border text-xs font-mono text-ink-muted">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-ink mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-primary mb-2">
                    {edu.field}
                  </div>

                  <div className="text-sm text-ink-muted flex items-center gap-1.5 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-ink-faint" />
                    <span>{edu.institute} ({edu.location})</span>
                  </div>

                  {/* Key Subjects */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-faint flex items-center gap-1.5 font-semibold">
                      <BookOpen className="w-3.5 h-3.5 text-primary" /> Core Disciplines
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.keySubjects.map((subj, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-canvas-subtle text-ink-muted border border-border/70"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/70 text-xs text-ink-muted leading-relaxed italic">
                  "{edu.highlights}"
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Certifications Subsection */}
        {certificationsData && certificationsData.length > 0 && (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint font-semibold mb-6">
              <Award className="w-4 h-4 text-amber-500" /> Professional Certifications & Training
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-surface border border-border flex items-center gap-4 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center border border-primary/20 flex-shrink-0">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-ink">
                      {cert.name}
                    </div>
                    <div className="text-xs text-ink-muted">
                      {cert.issuer} • {cert.focus}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
