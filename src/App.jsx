import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Sections/Hero";
import Contacts from "./components/Sections/Contacts";
import Projects from "./components/Sections/Projects";
import Testimonials from "./components/Sections/Testimonials";
import About from "./components/Sections/About";
import Experiences from "./components/Sections/Experiences";

const App = () => {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonials />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
