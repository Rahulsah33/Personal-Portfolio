import React, { useState } from "react";
import { FolderGit2, ExternalLink, ArrowRight, Eye } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import Card3D from "../ui/Card3D";
import { projectsData } from "../../data/content";

const categories = ["All", "Full Stack", "Java Desktop", "Frontend"];

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-b border-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <FolderGit2 className="w-4 h-4" /> Portfolio Index
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Selected works &{" "}
              <span className="font-editorial italic font-normal text-primary">
                architectures.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-canvas-subtle border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-primary-fg shadow-xs"
                    : "text-ink-muted hover:text-ink hover:bg-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Card3D
              key={project.id || idx}
              maxTilt={7}
              scale={1.02}
              className="h-full rounded-3xl"
            >
              <div className="group bg-surface border border-border rounded-3xl overflow-hidden flex flex-col justify-between h-full shadow-xs hover:border-primary/40 transition-colors">
                {/* Top: Image Preview & Category Badge */}
                <div>
                  <div className="relative aspect-video overflow-hidden bg-canvas-subtle border-b border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface/90 backdrop-blur-md text-ink border border-border shadow-xs font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {project.metrics && (
                      <div className="absolute bottom-3 right-3">
                        <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-canvas/90 backdrop-blur-md text-primary border border-primary/30 font-medium">
                          {project.metrics}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold font-display text-ink group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-canvas-subtle text-ink-muted border border-border/70"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-[10px] font-mono text-ink-faint">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 border-t border-border/70 bg-canvas-subtle flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-primary hover:text-[var(--primary-hover)] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border bg-surface text-ink-muted hover:text-ink hover:border-border-strong transition-colors"
                        aria-label="View GitHub repository"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border bg-surface text-ink-muted hover:text-primary hover:border-primary/40 transition-colors"
                        aria-label="View live project"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
