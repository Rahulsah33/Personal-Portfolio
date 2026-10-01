import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";
import { personalData } from "../../data/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple scroll spy
      const sections = ["hero", "about", "skills", "projects", "experience", "education", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/85 backdrop-blur-md border-b border-border py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          aria-label="Back to top"
        >
          <div className="w-9 h-9 rounded-xl bg-ink text-canvas flex items-center justify-center font-display font-bold text-sm tracking-tighter group-hover:bg-primary transition-colors">
            {personalData.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-ink group-hover:text-primary transition-colors leading-tight">
              {personalData.name}
            </span>
            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
              Java Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-surface-muted/70 backdrop-blur-sm border border-border px-2 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-display transition-colors ${
                  isActive
                    ? "bg-primary text-primary-fg shadow-sm"
                    : "text-ink-muted hover:text-ink hover:bg-surface"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Right Actions (Theme + Resume) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Button
            variant="outline"
            size="sm"
            href={personalData.resumeUrl}
            download="Rahul_Kumar_Sah_Resume.pdf"
            className="font-mono text-xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            href="#contact"
            className="text-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl border border-border bg-surface text-ink hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-surface/95 backdrop-blur-xl border-b border-border shadow-2xl animate-fade-in z-50">
          <div className="px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium font-display text-ink-muted hover:text-ink hover:bg-surface-hover transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <Button
                variant="outline"
                size="md"
                href={personalData.resumeUrl}
                download="Rahul_Kumar_Sah_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                <FileDown className="w-4 h-4" /> Download Resume
              </Button>

              <Button
                variant="primary"
                size="md"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
