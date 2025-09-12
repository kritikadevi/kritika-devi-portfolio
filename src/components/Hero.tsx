import { ArrowDownRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import kritikaProfile from "@/assets/kritika-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-bg-subtle rounded-full blur-3xl opacity-20 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-bg-subtle rounded-full blur-3xl opacity-15 float-animation" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-bg-subtle rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-foreground-secondary text-lg font-medium">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
                  Kritika Devi
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-poppins text-foreground-secondary">
                  Full Stack Developer
                </h2>
                <div className="text-lg text-foreground-muted max-w-lg">
                  <span className="typing-animation inline-block">
                    React • Java • Node.js • Innovator
                  </span>
                </div>
              </div>

              <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl">
                B.Tech Computer Science student at NIT Srinagar with expertise in building scalable, 
                user-focused applications. Passionate about creating impactful digital solutions 
                and solving complex problems through code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="btn-primary group"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
                <ArrowDownRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary group"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 glass-card-hover"
                onClick={() => window.open('https://github.com/kritikadevi', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 glass-card-hover"
                onClick={() => window.open('https://linkedin.com/in/kritika-devi-873439319', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 glass-card-hover"
                onClick={() => window.open('mailto:kritikadevi012@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-20 pulse-glow"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full glass-card rounded-full p-2 hover-lift">
                <img
                  src={kritikaProfile}
                  alt="Kritika Devi - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 glass-card rounded-full p-3 float-animation">
                  <div className="w-6 h-6 gradient-bg rounded-full"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card rounded-full p-4 float-animation" style={{ animationDelay: '-2s' }}>
                  <div className="text-brand-primary font-bold text-sm">
                    8.0+ CGPA
                  </div>
                </div>
                <div className="absolute top-1/4 -left-8 glass-card rounded-full p-3 float-animation" style={{ animationDelay: '-4s' }}>
                  <div className="text-brand-secondary font-bold text-xs">
                    NIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDownRight 
            className="w-6 h-6 text-brand-primary cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;