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

      <div className="container mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold gradient-text mb-3">
                Kritika Devi
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                Full Stack Developer passionate about creating impactful digital solutions. 
                Currently pursuing B.Tech in Computer Science at NIT Srinagar.
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 glass-card-hover text-foreground-secondary hover:text-brand-primary transition-colors duration-300"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-poppins font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground-secondary hover:text-brand-primary transition-colors duration-300 text-left py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-poppins font-semibold text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="text-foreground-secondary">
                <span className="text-sm text-foreground-muted block">Email</span>
                <a 
                  href="mailto:kritikadevi012@gmail.com"
                  className="hover:text-brand-primary transition-colors"
                >
                  kritikadevi012@gmail.com
                </a>
              </div>
              <div className="text-foreground-secondary">
                <span className="text-sm text-foreground-muted block">Phone</span>
                <a 
                  href="tel:+919541260886"
                  className="hover:text-brand-primary transition-colors"
                >
                  +91 9541260886
                </a>
              </div>
              <div className="text-foreground-secondary">
                <span className="text-sm text-foreground-muted block">Location</span>
                <span>Srinagar, Jammu & Kashmir</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-card-border to-transparent"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-foreground-secondary text-sm">
              <span>© {currentYear} Kritika Devi. Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using modern web technologies.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-foreground-secondary">
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
        <div className="absolute bottom-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 glass-card-hover opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;