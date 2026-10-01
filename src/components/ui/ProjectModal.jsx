import React, { useEffect } from "react";
import { X, ExternalLink, Cpu, CheckCircle, HelpCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Button from "./Button";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface border border-border rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-canvas-subtle">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-primary-subtle text-primary border border-primary/30 font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-ink-muted hidden sm:inline">
              SYS-DOC // {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-hover transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Title & Tagline */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-ink"
            >
              {project.title}
            </h2>
            <p className="text-base text-ink-muted mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Screenshot */}
          <div className="relative rounded-xl overflow-hidden border border-border bg-canvas-subtle aspect-video max-h-72">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Case Study Breakdown */}
          {project.architecture && (
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" /> Architecture & Implementation
              </h3>

              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-border space-y-1">
                <div className="text-xs font-mono uppercase text-ink-faint flex items-center gap-1.5 font-semibold">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" /> Problem Context
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.architecture.problem}
                </p>
              </div>

              {/* Solution Statement */}
              <div className="p-4 rounded-xl bg-canvas-subtle border border-border space-y-1">
                <div className="text-xs font-mono uppercase text-ink-faint flex items-center gap-1.5 font-semibold">
                  <Cpu className="w-3.5 h-3.5 text-primary" /> Technical Solution
                </div>
                <p className="text-sm text-ink leading-relaxed font-medium">
                  {project.architecture.solution}
                </p>
              </div>

              {/* Technical Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-ink-faint font-semibold">
                  Key Technical Deliverables
                </div>
                <ul className="space-y-2">
                  {project.architecture.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="pt-2 border-t border-border">
            <div className="text-xs font-mono uppercase text-ink-faint mb-2 font-semibold">
              Technologies & Libraries
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-surface-muted text-ink border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-border bg-canvas-subtle">
          <div className="text-xs font-mono text-ink-muted">
            Status: <span className="text-emerald-500 font-semibold">Verified</span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <Button
                variant="secondary"
                size="sm"
                href={project.github}
                target="_blank"
              >
                <GithubIcon className="w-4 h-4" /> Source Code
              </Button>
            )}

            {project.live && (
              <Button
                variant="primary"
                size="sm"
                href={project.live}
                target="_blank"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
