import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import portfolioproject1 from "../../assets/portfolioproject1.png";
import Hotelproject from "../../assets/Hotelproject.jpg";
import Electricityproject from "../../assets/Electricityproject.png";
import Bankproject from "../../assets/Bankproject.png";
import foodproject from "../../assets/foodproject.jpeg";
import chatapp from "../../assets/chatapp.png";
import Todoproject from "../../assets/Todoproject.png";

import AnimatedDownloadButton from "./Buttons/AnimatedDownloadButton";

const projects = [
  {
    title: "Personal Developer Portfolio",
    description:
      "A modern and responsive portfolio website showcasing my skills, projects, and experience with smooth animations and a clean UI.",
    image: portfolioproject1,
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/Rahulsah33/Personal-Portfolio",
  },
  {
    title: "Hotel Management System",
    description:
      "A Java-based system to manage hotel operations including room booking, customer records, and billing.",
    image: Hotelproject,
    tags: ["Java", "Swing", "AWT", "MySQL"],
    github: "https://github.com/Rahulsah33/Hotel-Management-system",
  },
  {
    title: "Electricity Meter Billing System",
    description:
      "An electricity billing system that calculates usage and generates customer bills using Java and MySQL.",
    image: Electricityproject,
    tags: ["Java", "Swing", "AWT", "MySQL"],
    github: "https://github.com/Rahulsah33/Electricity-Meter-Billing-System",
  },
  {
    title: "Bank Management System",
    description:
      "A Java application for managing banking operations such as deposits, withdrawals, and balance inquiry.",
    image: Bankproject,
    tags: ["Java", "Swing", "AWT", "MySQL"],
    github: "https://github.com/Rahulsah33/Bank-Management-System",
  },
  {
    title: "Online Food Delivery Application",
    description:
      "A responsive food ordering web application with modern UI and smooth user experience.",
    image: foodproject,
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/Rahulsah33/Online-Food-deliver",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application enabling instant messaging with dynamic UI updates.",
    image: chatapp,
    tags: ["React", "Spring Boot"],
    github: "https://github.com/Rahulsah33/Real-Time-Chat-Application",
  },
  {
    title: "Todo Management Application",
    description:
      "A task management app to add, update, and delete tasks efficiently.",
    image: Todoproject,
    tags: ["React", "Spring Boot"],
    github: "https://github.com/Rahulsah33/Todo-Application",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Projects that{" "}
            <span className="font-serif italic font-normal text-primary">
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A selection of projects demonstrating my skills in frontend,
            backend, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition"
                  >
                    <GitHubIcon fontSize="small" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
