import React, { useState } from "react";
import { ArrowDown, FileDown, Box, User } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";
import Button from "../ui/Button";
import Card3D from "../ui/Card3D";
import SceneCanvas from "../3d/SceneCanvas";
import HeroCore3D from "../3d/HeroCore3D";
import ParticleField3D from "../3d/ParticleField3D";
import { personalData } from "../../data/content";

const Hero = () => {
  const [viewMode, setViewMode] = useState("photo"); // "photo" | "3d"

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-border"
    >
      {/* 3D Background Particle Constellation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SceneCanvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ParticleField3D count={70} />
        </SceneCanvas>
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column (Text & CTAs) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status & Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wide text-ink">
                {personalData.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-ink leading-[1.1]">
                Building reliable backend systems{" "}
                <span className="font-editorial italic font-normal text-primary">
                  with Java & Spring Boot.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-ink-muted max-w-2xl leading-relaxed">
                Hi, I'm <span className="text-ink font-semibold">{personalData.name}</span>.
                I build web applications and REST APIs using Java, Spring Boot, and MySQL
                with a focus on clean, efficient code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="shadow-md"
              >
                Inspect Selected Work
                <ArrowDown className="w-4 h-4" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={personalData.resumeUrl}
                download="Rahul_Kumar_Sah_Resume.pdf"
                className="font-mono text-sm"
              >
                <FileDown className="w-4 h-4 text-primary" />
                <span>Get Resume</span>
              </Button>
            </div>

            {/* Social Channels & Verification */}
            <div className="pt-4 flex items-center gap-4 text-ink-muted">
              <span className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                Connect:
              </span>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Column: Interactive 3D Card / Canvas */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Top Mode Toggle Badge (Photo vs 3D Core) */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="font-mono text-[10px] text-ink-faint bg-canvas px-2 py-0.5 border border-border rounded">
                  FIG. 01 // {viewMode === "3d" ? "3D SCHEMATIC" : "DOSSIER"}
                </div>

                <div className="flex items-center gap-1 bg-surface border border-border p-1 rounded-xl shadow-2xs">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      viewMode === "photo"
                        ? "bg-primary text-primary-fg font-semibold"
                        : "text-ink-muted hover:text-ink"
                    }`}
                    title="View Portrait Dossier"
                  >
                    <User className="w-3 h-3" /> Photo
                  </button>
                  <button
                    onClick={() => setViewMode("3d")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      viewMode === "3d"
                        ? "bg-primary text-primary-fg font-semibold"
                        : "text-ink-muted hover:text-ink"
                    }`}
                    title="Interact with 3D Core"
                  >
                    <Box className="w-3 h-3" /> 3D Node
                  </button>
                </div>
              </div>

              {/* 3D Perspective Card Container */}
              <Card3D maxTilt={8} scale={1.01} className="w-full">
                <div className="bg-surface border border-border rounded-3xl p-3 shadow-xl overflow-hidden">
                  {viewMode === "photo" ? (
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-canvas-subtle">
                      <img
                        src={personalData.profileImage}
                        alt={personalData.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-canvas-subtle flex items-center justify-center">
                      <SceneCanvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                        <HeroCore3D />
                      </SceneCanvas>
                      <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                        <span className="font-mono text-[10px] text-ink-muted bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-border">
                          Drag & Move Cursor to Rotate 3D Core
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
