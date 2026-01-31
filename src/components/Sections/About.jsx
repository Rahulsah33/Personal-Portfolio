import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const highlights = [
  {
    icon: CodeIcon,
    title: "Clean Code",
    description:
      "Writing maintainable, readable, and scalable code that stands the test of time.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Performance",
    description:
      "Building fast, optimized applications with a focus on efficiency and smooth user experience.",
  },
  {
    icon: GroupsIcon,
    title: "Collaboration",
    description:
      "Working effectively with teams using clear communication, Git workflows, and shared goals.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    description:
      "Solving problems creatively and continuously learning new tools and technologies.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* {Left-column} */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-xl font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building reliable systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one service at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-100 ">
              <p>
                Hi, I’m Rahul, a passionate Java Developer with a strong
                interest in backend development and building scalable
                applications. I enjoy working with Java, Spring Boot, REST APIs,
                and MySQL to create reliable and efficient systems.
              </p>
              <p>
                I am a continuous learner who enjoys exploring new technologies
                and improving problem-solving skills through practice and
                real-world projects. I am eager to contribute to impactful
                teams, learn from experienced developers, and grow as a backend
                engineer by building solutions that solve real-world problems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-200">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to continuously grow my technical skills and build
                reliable backend solutions that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Right Column- Highlights */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className=" text-primary" fontSize="medium" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
