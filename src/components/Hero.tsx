import { ArrowDownRight, Download, Mail, Github, Linkedin, Sparkles, Code, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import kritikaProfile from "@/assets/kritika-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 gradient-bg opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 gradient-bg opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-bg opacity-5 rounded-full blur-3xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-primary rounded-full animate-float opacity-60" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-brand-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand-accent rounded-full animate-float opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-brand-primary rounded-full animate-float opacity-30" style={{ animationDelay: '-5s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Enhanced Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium text-brand-primary border border-brand-primary/20 hover-lift">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-foreground-secondary text-lg font-medium tracking-wide uppercase">
                    Hello, I'm
                  </p>
                  <h1 className="text-6xl lg:text-8xl font-bold leading-none">
                    <span className="gradient-text block">Kritika</span>
                    <span className="gradient-text block">Devi</span>
                  </h1>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <h2 className="text-3xl lg:text-4xl font-poppins text-foreground-secondary font-light">
                      Full Stack Developer
                    </h2>
                    <div className="absolute -right-4 -top-2">
                      <Sparkles className="w-6 h-6 text-brand-accent animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-lg">
                    <div className="flex items-center gap-2 px-3 py-1 glass-card rounded-full">
                      <Code className="w-4 h-4 text-brand-primary" />
                      <span className="text-foreground-secondary">React</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 glass-card rounded-full">
                      <Coffee className="w-4 h-4 text-brand-secondary" />
                      <span className="text-foreground-secondary">Java</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 glass-card rounded-full">
                      <Code className="w-4 h-4 text-brand-accent" />
                      <span className="text-foreground-secondary">Node.js</span>
                    </div>
                    <div className="text-foreground-muted">+</div>
                    <div className="text-brand-primary font-semibold">More</div>
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
            <div className="flex flex-wrap gap-6">
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-brand transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Let's Work Together
                  <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
              </Button>
              
              <Button 
                variant="outline" 
                className="group glass-card border-2 border-foreground-secondary/20 hover:border-brand-primary/50 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-brand-primary/5 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
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
          <div className="relative lg:justify-self-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
              
              {/* Main Image Container with enhanced glass effect */}
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-xl"></div>
                <div className="relative w-full h-full p-3 hover:scale-105 transition-transform duration-500">
                  <img
                    src={kritikaProfile}
                    alt="Kritika Devi - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                </div>
                
                {/* Enhanced Floating Badges */}
                <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 hover-lift group-hover:rotate-12 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 gradient-bg rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">Online</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 glass-card rounded-2xl p-4 hover-lift group-hover:-rotate-6 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">8.0+</div>
                    <div className="text-xs text-foreground-secondary">CGPA</div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 -left-12 glass-card rounded-2xl p-3 hover-lift group-hover:rotate-3 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg font-bold text-brand-secondary">NIT</div>
                    <div className="text-xs text-foreground-secondary">Student</div>
                  </div>
                </div>
                
                <div className="absolute top-3/4 -right-10 glass-card rounded-2xl p-3 hover-lift group-hover:-rotate-12 transition-transform duration-300">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-semibold text-foreground">Creative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-sm text-foreground-secondary font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-foreground-secondary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;