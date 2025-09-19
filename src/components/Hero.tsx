import { ArrowDownRight, Download, Mail, Github, Linkedin, Sparkles, Code, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import kritikaProfile from "@/assets/kritika-profile.jpg";

const heroSocials = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/kritikadevi',
    hoverColor: 'group-hover:text-brand-primary',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/kritika-devi-873439319',
    hoverColor: 'group-hover:text-brand-secondary',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:kritikadevi012@gmail.com',
    hoverColor: 'group-hover:text-brand-accent',
  },
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 xs:px-4 sm:px-6">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Animated Gradient Orbs - Responsive Sizes */}
        <div className="absolute top-10 xs:top-20 left-4 xs:left-20 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 gradient-bg opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 xs:bottom-20 right-4 xs:right-20 w-40 h-40 xs:w-60 xs:h-60 sm:w-80 sm:h-80 gradient-bg opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] xs:w-[800px] xs:h-[800px] sm:w-[1000px] sm:h-[1000px] gradient-bg opacity-5 rounded-full blur-3xl"></div>
        
        {/* Floating Particles - Hidden on very small screens */}
        <div className="hidden xs:block absolute top-1/4 left-1/4 w-2 h-2 bg-brand-primary rounded-full animate-float opacity-60" style={{ animationDelay: '-1s' }}></div>
        <div className="hidden xs:block absolute top-3/4 left-1/3 w-1 h-1 bg-brand-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '-4s' }}></div>
        <div className="hidden xs:block absolute top-1/2 right-1/4 w-3 h-3 bg-brand-accent rounded-full animate-float opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="hidden xs:block absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-brand-primary rounded-full animate-float opacity-30" style={{ animationDelay: '-5s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:30px_30px] xs:bg-[size:40px_40px] sm:bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-2 xs:px-4 sm:px-6 relative z-10">
        <div className="grid gap-8 xs:gap-12 sm:gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Enhanced Content */}
          <div className="space-y-6 xs:space-y-8 sm:space-y-10 animate-fade-in text-center lg:text-left">
            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 xs:px-4 xs:py-2 glass-card rounded-full text-xs xs:text-sm font-medium text-brand-primary border border-brand-primary/20 hover-lift">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-brand-primary rounded-full animate-pulse"></div>
                <span className="hidden xs:inline">Available for opportunities</span>
                <span className="xs:hidden">Available</span>
              </div>
              
              <div className="space-y-3 xs:space-y-4">
                <div className="space-y-2 xs:space-y-3">
                  <p className="text-foreground-secondary text-sm xs:text-base sm:text-lg font-medium tracking-wide uppercase">
                    Hello, I'm
                  </p>
                  <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-bold leading-none">
                    <span className="gradient-text block">Kritika</span>
                    <span className="gradient-text block">Devi</span>
                  </h1>
                </div>
                
                <div className="space-y-4 xs:space-y-6">
                  <div className="relative">
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-poppins text-foreground-secondary font-light">
                      Full Stack Developer
                    </h2>
                    <div className="absolute -right-2 xs:-right-4 -top-1 xs:-top-2 lg:block hidden">
                      <Sparkles className="w-4 h-4 xs:w-6 xs:h-6 text-brand-accent animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4 text-sm xs:text-base sm:text-lg">
                    <div className="flex items-center gap-1.5 xs:gap-2 px-2 py-1 xs:px-3 xs:py-1 glass-card rounded-full">
                      <Code className="w-3 h-3 xs:w-4 xs:h-4 text-brand-primary" />
                      <span className="text-foreground-secondary">React</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2 px-2 py-1 xs:px-3 xs:py-1 glass-card rounded-full">
                      <Coffee className="w-3 h-3 xs:w-4 xs:h-4 text-brand-secondary" />
                      <span className="text-foreground-secondary">Java</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2 px-2 py-1 xs:px-3 xs:py-1 glass-card rounded-full">
                      <Code className="w-3 h-3 xs:w-4 xs:h-4 text-brand-accent" />
                      <span className="text-foreground-secondary hidden xs:inline">Node.js</span>
                      <span className="text-foreground-secondary xs:hidden">Node</span>
                    </div>
                    <div className="text-foreground-muted hidden xs:block">+</div>
                    <div className="text-brand-primary font-semibold text-xs xs:text-sm sm:text-base">More</div>
                  </div>
                </div>

                <p className="text-foreground-secondary text-xl leading-relaxed max-w-2xl">
                  B.Tech Information Technology student at{" "}
                  <span className="text-brand-primary font-semibold">NIT Srinagar</span>{" "}
                  With hands-on expertise in building scalable, user-focused applications, and a strong passion for developing innovative digital solutions that create real-world impact.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 items-center justify-center lg:justify-start">
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-xl xs:rounded-2xl font-semibold text-sm xs:text-base sm:text-lg shadow-2xl hover:shadow-brand transition-all duration-300 hover:scale-105 w-full xs:w-auto"
                onClick={() => scrollToSection('contact')}
              >
                <div className="flex items-center gap-2 xs:gap-3 justify-center">
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
                  <span className="hidden xs:inline">Let's Work Together</span>
                  <span className="xs:hidden">Work Together</span>
                  <ArrowDownRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
              </Button>
              
              <Button 
                variant="outline" 
                className="group glass-card border-2 border-foreground-secondary/20 hover:border-brand-primary/50 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-brand-primary/5 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://drive.google.com/file/d/1AZhqBCzkIDpEPG-IQtaL6KScuJ0QPOND/view?usp=drivesdk ', '_blank')}
              >
                <div className="flex items-center gap-2 xs:gap-3 justify-center">
                  <Download className="w-4 h-4 xs:w-5 xs:h-5 group-hover:animate-bounce" />
                  <span className="hidden xs:inline">Download Resume</span>
                  <span className="xs:hidden">Resume</span>
                </div>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 pt-6">
              <Button
                variant="ghost"
                size="icon"
                className="w-14 h-14 glass-card hover:glass-card-hover rounded-2xl group transition-all duration-300 hover:scale-110"
                onClick={() => window.open('https://github.com/kritikadevi', '_blank')}
              >
                <Github className="w-6 h-6 group-hover:text-brand-primary transition-colors" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-14 h-14 glass-card hover:glass-card-hover rounded-2xl group transition-all duration-300 hover:scale-110"
                onClick={() => window.open('https://linkedin.com/in/kritika-devi-873439319', '_blank')}
              >
                <Linkedin className="w-6 h-6 group-hover:text-brand-secondary transition-colors" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-14 h-14 glass-card hover:glass-card-hover rounded-2xl group transition-all duration-300 hover:scale-110"
                onClick={() => window.open('mailto:kritikadevi012@gmail.com', '_blank')}
              >
                <Mail className="w-6 h-6 group-hover:text-brand-accent transition-colors" />
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="relative flex justify-center lg:justify-self-end animate-scale-in mt-6 xs:mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px]">
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <div className="absolute inset-2 xs:inset-3 sm:inset-4 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
              
              {/* Main Image Container with enhanced glass effect */}
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-xl"></div>
                <div className="relative w-full h-full p-2 xs:p-3 hover:scale-105 transition-transform duration-500">
                  <img
                    src={kritikaProfile}
                    alt="Kritika Devi - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                </div>
                
                {/* Enhanced Floating Badges - Responsive positioning and sizing */}
                <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 sm:-top-6 sm:-right-6 glass-card rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 hover-lift group-hover:rotate-12 transition-transform duration-300">
                  <div className="flex items-center gap-1 xs:gap-2">
                    <div className="w-2 h-2 xs:w-3 xs:h-3 gradient-bg rounded-full animate-pulse"></div>
                    <span className="text-xs xs:text-sm font-semibold text-foreground">Online</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 xs:-bottom-6 xs:-left-6 sm:-bottom-8 sm:-left-8 glass-card rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 hover-lift group-hover:-rotate-6 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl font-bold gradient-text">8.0+</div>
                    <div className="text-xs text-foreground-secondary">CGPA</div>
                  </div>
                </div>
                
                <div className="hidden sm:block absolute top-1/4 -left-8 lg:-left-10 xl:-left-12 glass-card rounded-xl lg:rounded-2xl p-2 lg:p-3 hover-lift group-hover:rotate-3 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm lg:text-base xl:text-lg font-bold text-brand-secondary">NIT</div>
                    <div className="text-xs text-foreground-secondary">Student</div>
                  </div>
                </div>
                
                <div className="hidden xs:block absolute top-3/4 -right-6 sm:-right-8 lg:-right-10 glass-card rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 hover-lift group-hover:-rotate-12 transition-transform duration-300">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-brand-accent" />
                    <span className="text-xs font-semibold text-foreground">Creative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Hidden on small screens */}
      <div className="hidden sm:block absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 xs:gap-2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-xs xs:text-sm text-foreground-secondary font-medium">Scroll to explore</span>
          <div className="w-5 h-8 xs:w-6 xs:h-10 border-2 border-foreground-secondary/30 rounded-full flex justify-center">
            <div className="w-1 h-2 xs:h-3 bg-brand-primary rounded-full mt-1.5 xs:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;