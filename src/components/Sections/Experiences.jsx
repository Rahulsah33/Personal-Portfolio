import React from "react";
const experiences = [
  {
    period: "2024 — Present",
    role: "Java Backend Developer (Fresher)",
    company: "Self Projects & Learning",
    description:
      "Building backend applications using Java and Spring Boot. Focused on REST API development, database design, and writing clean, maintainable code while continuously improving problem-solving skills.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    current: true,
  },
  {
    period: "2024",
    role: "Internship in Java Programming ",
    company: "Online Training  (Codsoft) ",
    description:
      "Completed hands-on training in core Java, object-oriented programming. Developed mini projects including CRUD applications and authentication modules.",
    technologies: ["Core Java", "OOPs", "Advanced Java", "Hibernate"],
    current: false,
  },
  {
    period: "2023",
    role: "Academic Project – Backend Developer",
    company: "College mini-Project",
    description:
      "Designed and developed a backend system for a Student Management Application. Implemented RESTful APIs, handled database operations, and integrated backend services with frontend.",
    technologies: ["Java", "Spring Boot", "MySQL", "Postman"],
    current: false,
  },
  {
    period: "2022 — 2023",
    role: "Java & Web Development Learner",
    company: "Personal Practice",
    description:
      "Practiced Java programming and basic web technologies. Built small applications to understand backend concepts, database connectivity, and API communication.",
    technologies: ["Java", "JDBC", "HTML", "CSS"],
    current: false,
  },
];

const Experiences = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience &{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              Education.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline reflecting my experiences, education, and commitment to
            continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
