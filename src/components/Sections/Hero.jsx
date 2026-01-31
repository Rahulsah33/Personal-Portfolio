import React, { useMemo } from "react";
import Button from "./Buttons/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimatedDownloadButton from "./Buttons/AnimatedDownloadButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

const skills = [
  "Java",
  "Spring Boot",
  "REST API",
  "React",
  "MySQL",
  "Vercel",
  "Tailwind CSS",
  "Git",
  "DSA",
];

const Hero = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.3,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11710281/pexels-photo-11710281.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Aspiring Java Developer · Software Engineer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Growing into a{" "}
              <span className="text-primary glow-text">skilled</span>
              <br />
              Java developer with
              <br />
              <span className="font-serif italic font-normal">Precision</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Hi, I'm Rahul Kumar Sah <br />
              Java Backend Developer · Spring Boot · REST APIs · MySQL
            </p>

            <div className="flex gap-4">
              <Button size="lg">
                Contact Me <ArrowForwardIcon fontSize="small" />
              </Button>
              <AnimatedDownloadButton />
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                {
                  icon: Github,
                  href: "https://github.com/Rahulsah33",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/your-linkedin-username",
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/your-twitter-username",
                  label: "Twitter",
                },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
            <div className="relative glass rounded-3xl p-2">
              <img
                src="/Images/profile.jpg"
                alt="Rahul Sah"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 glass px-4 py-3 rounded-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  SKILLS */}
      <div className="relative z-10 w-screen overflow-hidden py-20 bg-background/80 backdrop-blur">
        <p className="text-sm text-muted-foreground text-center mb-10">
          Technologies I work with
        </p>

        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, idx) => (
            <span
              key={idx}
              className="mx-12 text-2xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ExpandMoreIcon className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
