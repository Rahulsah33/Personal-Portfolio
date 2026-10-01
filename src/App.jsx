import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ProjectModal from "./components/ui/ProjectModal";
import Toast from "./components/ui/Toast";

const AppContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState({ message: null, type: "success" });

  const triggerToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: null, type: "success" });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink transition-colors duration-300">
      {/* Blueprint Header */}
      <Navbar />

      {/* Main Sections Flow */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Experience />
        <Education />
        <Testimonials />
        <Contact onTriggerToast={triggerToast} />
      </main>

      {/* Technical Ledger Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Global Toast Feedback */}
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: null, type: "success" })}
        />
      )}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
