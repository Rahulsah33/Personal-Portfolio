import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { testimonialsData } from "../../data/content";

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIdx];

  return (
    <section id="testimonials" className="py-24 border-b border-border bg-canvas-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <MessageSquareQuote className="w-4 h-4" /> Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Feedback from mentors{" "}
              <span className="font-editorial italic font-normal text-primary">
                & peers.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted uppercase">
            SEC // 07 — TESTIMONIALS
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center mb-8 border border-primary/20">
              <Quote className="w-6 h-6" />
            </div>

            <blockquote className="text-lg sm:text-2xl font-display font-medium text-ink leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-border">
              {/* Author Details */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-2xl object-cover border border-border"
                  loading="lazy"
                />
                <div>
                  <div className="text-base font-bold font-display text-ink">
                    {current.author}
                  </div>
                  <div className="text-xs font-semibold text-primary">
                    {current.title}
                  </div>
                  <div className="text-xs font-mono text-ink-muted">
                    {current.organization}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-border bg-canvas-subtle text-ink-muted hover:text-ink hover:border-border-strong transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-3">
                  {testimonialsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        i === activeIdx ? "w-6 bg-primary" : "w-2 bg-border-strong hover:bg-ink-muted"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-2.5 rounded-xl border border-border bg-canvas-subtle text-ink-muted hover:text-ink hover:border-border-strong transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
