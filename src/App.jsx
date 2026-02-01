import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Experiences from "./components/Sections/Experiences";
import Education from "./components/Sections/Education";
import Testimonials from "./components/Sections/Testimonials";
import Contacts from "./components/Sections/Contacts";
import Footer from "./components/Sections/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Education />
        <Testimonials />
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
