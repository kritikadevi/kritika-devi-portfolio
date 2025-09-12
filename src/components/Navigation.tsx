import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: Code },
    { label: "Achievements", href: "#achievements", icon: Award },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-xl border-b border-card-border shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-poppins font-bold gradient-text">
                Kritika Devi
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-brand-primary ${
                    activeSection === item.href.substring(1)
                      ? "text-brand-primary"
                      : "text-foreground-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div className="fixed inset-0 bg-background/90 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-card-border shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors duration-300 hover:bg-card-hover ${
                      activeSection === item.href.substring(1)
                        ? "text-brand-primary bg-card-hover"
                        : "text-foreground-secondary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-[80] hidden lg:block">
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="group relative"
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-brand-primary border-brand-primary scale-125"
                    : "border-foreground-secondary hover:border-brand-primary hover:scale-110"
                }`}
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-card/90 backdrop-blur-sm text-foreground text-sm px-3 py-1.5 rounded-lg border border-card-border whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;