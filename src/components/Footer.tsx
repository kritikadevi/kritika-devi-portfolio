import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kritikadevi",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kritika-devi-873439319",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:kritikadevi012@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-bg-subtle rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 gradient-bg-subtle rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 relative">
        {/* Main Footer Content */}
        <div className="py-8 xs:py-12 sm:py-16 grid gap-8 xs:gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4 xs:space-y-6 md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl xs:text-2xl font-poppins font-bold gradient-text mb-2 xs:mb-3">
                Kritika Devi
              </h3>
              <p className="text-foreground-secondary leading-relaxed text-sm xs:text-base">
                Full Stack Developer passionate about creating impactful digital solutions. 
                Currently pursuing B.Tech in Information Technology at NIT Srinagar.
              </p>
            </div>
            
            <div className="flex gap-3 xs:gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 xs:w-10 xs:h-10 glass-card-hover text-foreground-secondary hover:text-brand-primary transition-colors duration-300"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 xs:space-y-6">
            <h4 className="text-base xs:text-lg font-poppins font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 xs:gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground-secondary hover:text-brand-primary transition-colors duration-300 text-left py-1 text-sm xs:text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 xs:space-y-6">
            <h4 className="text-base xs:text-lg font-poppins font-semibold text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-2 xs:space-y-3">
              <div className="text-foreground-secondary">
                <span className="text-xs xs:text-sm text-foreground-muted block">Email</span>
                <a 
                  href="mailto:kritikadevi012@gmail.com"
                  className="hover:text-brand-primary transition-colors text-sm xs:text-base break-all"
                >
                  kritikadevi012@gmail.com
                </a>
              </div>
              <div className="text-foreground-secondary">
                <span className="text-xs xs:text-sm text-foreground-muted block">Phone</span>
                <a 
                  href="tel:+919541260886"
                  className="hover:text-brand-primary transition-colors text-sm xs:text-base"
                >
                  +91 9541260886
                </a>
              </div>
              <div className="text-foreground-secondary">
                <span className="text-xs xs:text-sm text-foreground-muted block">Location</span>
                <span className="text-sm xs:text-base">Srinagar, Jammu & Kashmir</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-card-border to-transparent"></div>

        {/* Bottom Footer */}
        <div className="py-6 xs:py-8">
          <div className="flex flex-col items-center justify-between gap-3 xs:gap-4 md:flex-row">
            <div className="flex items-center gap-1.5 xs:gap-2 text-foreground-secondary text-xs xs:text-sm text-center">
              <span>© {currentYear} Kritika Devi. Crafted with</span>
              <Heart className="w-3 h-3 xs:w-4 xs:h-4 text-red-500 fill-current" />
              <span className="hidden xs:inline">using modern web technologies.</span>
              <span className="xs:hidden">love.</span>
            </div>
            
            <div className="flex items-center gap-4 xs:gap-6 text-xs xs:text-sm text-foreground-secondary">
              <button 
                onClick={() => scrollToSection('#about')}
                className="hover:text-brand-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('#projects')}
                className="hover:text-brand-primary transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-brand-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Indicator */}
        <div className="absolute bottom-3 xs:bottom-4 right-3 xs:right-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 xs:w-10 xs:h-10 glass-card-hover opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-brand-primary rounded-full"></div>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;