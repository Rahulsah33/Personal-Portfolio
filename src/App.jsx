import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import Testimonials from "./components/Sections/Testimonials";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Layout/Footer";
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
