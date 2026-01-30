import Button from "./Buttons/Button";
import React, { useMemo } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  // Generate dots only once
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.3,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11710281/pexels-photo-11710281.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
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
              animation: `slow-drift  ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `$ {Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg-grid-cols-2 gap-12 items-center">
          {/* Left-Column -> Text Content  */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary" />
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse">
                Java Developer. Software Engineer
              </span>
            </div>

            {/* HeadLine */}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold   leading-tight animate-fade-in animation-delay-100">
                Crafting
                <span className="text-primary glow-text ">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hi, Im Rahul Kumar Sah- a java developer
              </p>
            </div>

            <div>
              <Button size="lg">
                Contact Me
                <ArrowForwardIcon className="w-5 h-5" />
              </Button>

              {/* AnimatedBorderButton */}

              <button className="">
                {/* Animated SVG Boarder */}

                <svg
                  className="absolute left-0 top-0 w-full h-full pointer-events-auto"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible" }}
                >
                  <path
                    d="M 30, 1 A 29, 29 0 0 0 1, 30 L 1, 30 A 29, 29 0 0 0 30, 59 L"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="400 550"
                    strokeDashoffset="400"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="download-cv-path"
                  />
                </svg>
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right-Column -> Profile Images */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
