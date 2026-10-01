import React from "react";
import { ArrowUp, Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";
import { personalData } from "../../data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-canvas-subtle relative overflow-hidden">
      {/* Blueprint Grid Background Accent */}
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Identity & Telemetry */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-ink text-canvas flex items-center justify-center font-display font-bold text-xs">
                {personalData.monogram}
              </div>
              <span className="font-display font-bold text-lg text-ink">
                {personalData.name}
              </span>
            </div>

            <p className="text-sm text-ink-muted max-w-md leading-relaxed">
              Aspiring Java Backend Developer specializing in Spring Boot, REST APIs,
              and relational database architectures. Focused on clean code and reliable systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Location: {personalData.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-ink-faint font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm font-display">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-ink-muted hover:text-primary transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social Network Transmission */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-ink-faint font-semibold">
              Transmissions
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink-muted hover:text-primary transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink-muted hover:text-primary transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personalData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink-muted hover:text-primary transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="flex items-center gap-2 text-ink-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" /> Direct Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Ledger Line */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span>
              &copy; {currentYear} {personalData.name}. Designed & Engineered with React + Tailwind.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-ink hover:text-primary hover:border-primary transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
