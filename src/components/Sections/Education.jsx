import React from "react";

const education = [
  {
    period: "2022 — 2026 (Expected)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institute: "JB Institute of Technology, Dehradun",
    description:
      "Studying core computer science subjects such as Data Structures, DBMS, Operating Systems, and Software Engineering. Actively building academic and personal projects using Java and Spring Boot.",
  },
  {
    period: "2019 — 2021",
    degree: "Senior Secondary (XII)",
    field: "Science Stream",
    institute: "National Infotech Secondary School",
    description:
      "Focused on Mathematics and Science, developing problem-solving and analytical skills that created a strong base for software development.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Academic{" "}
            <span className="font-serif italic font-normal text-primary">
              Background
            </span>
          </h2>

          <p className="text-muted-foreground">
            My educational journey that built the foundation for my skills in
            Java, backend development, and problem solving.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-primary/30 hover:border-primary/60 transition-all"
            >
              <span className="text-sm text-primary font-medium">
                {edu.period}
              </span>

              <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>

              <p className="text-muted-foreground text-sm">
                {edu.field} · {edu.institute}
              </p>

              <p className="text-muted-foreground text-sm mt-4">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
