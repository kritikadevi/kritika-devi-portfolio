import { ExternalLink, Github, Play, Database, Globe, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Nest Quest",
      description: "A comprehensive full-stack booking platform built with the MERN stack and EJS templating. Features user authentication, property listings, booking management, and payment integration.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "EJS"],
      icon: Database,
      color: "text-brand-primary",
      bgGradient: "from-brand-primary/20 to-brand-primary/5",
      github: "https://github.com/kritikadevi",
      demo: "#",
      features: ["User Authentication", "Property Management", "Booking System", "Payment Gateway"]
    },
    {
      title: "Tic Tac Toe Game",
      description: "Interactive web-based Tic Tac Toe game with clean UI and smooth gameplay mechanics. Built with vanilla JavaScript for optimal performance and responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      icon: Gamepad2,
      color: "text-brand-secondary",
      bgGradient: "from-brand-secondary/20 to-brand-secondary/5",
      github: "https://github.com/kritikadevi",
      demo: "#",
      features: ["Two Player Mode", "Score Tracking", "Responsive Design", "Smooth Animations"]
    },
    {
      title: "Stone Paper Scissors",
      description: "Classic Stone Paper Scissors game with an intelligent computer opponent. Features score tracking, game statistics, and engaging visual feedback.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      icon: Globe,
      color: "text-brand-accent",
      bgGradient: "from-brand-accent/20 to-brand-accent/5",
      github: "https://github.com/kritikadevi",
      demo: "#",
      features: ["AI Opponent", "Score System", "Game Statistics", "Visual Effects"]
    },
    {
      title: "Mess Management System",
      description: "Desktop application for managing mess operations including meal planning, inventory tracking, and billing. Built with Java AWT for robust performance.",
      technologies: ["Java", "Java AWT", "Swing"],
      icon: Database,
      color: "text-warning",
      bgGradient: "from-warning/20 to-warning/5",
      github: "https://github.com/kritikadevi",
      demo: "#",
      features: ["Inventory Management", "Meal Planning", "Billing System", "User Management"]
    }
  ];

  return (
    <section id="projects" className="py-10 xs:py-12 sm:py-16 md:py-20 relative scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-4 xs:left-1/4 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-4 xs:right-1/4 w-40 h-40 xs:w-60 xs:h-60 sm:w-80 sm:h-80 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 xs:mb-6">
              Featured Projects
            </h2>
            <p className="text-foreground-secondary text-sm xs:text-base sm:text-lg max-w-3xl mx-auto px-4">
              A showcase of my technical skills through practical applications, 
              from full-stack web platforms to interactive games and desktop solutions.
            </p>
            <div className="w-16 xs:w-20 sm:w-24 h-1 gradient-bg mx-auto rounded-full mt-4 xs:mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 xs:gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-4 xs:p-6 sm:p-8 hover-lift group">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4 xs:mb-6">
                  <div className="flex items-center gap-3 xs:gap-4 flex-1 min-w-0">
                    <div className={`p-2 xs:p-3 glass-card rounded-lg ${project.color} bg-gradient-to-br ${project.bgGradient} flex-shrink-0`}>
                      <project.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base xs:text-lg sm:text-xl font-poppins font-semibold text-foreground group-hover:text-brand-primary transition-colors truncate">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 xs:gap-2 ml-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 glass-card-hover"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3 xs:w-4 xs:h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 glass-card-hover"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-foreground-secondary leading-relaxed mb-4 xs:mb-6 text-sm xs:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 xs:px-3 xs:py-1 text-xs xs:text-sm bg-background-secondary text-foreground-secondary rounded-full border border-card-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6">
                  <h4 className="text-xs xs:text-sm font-semibold text-foreground-secondary uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid gap-1.5 xs:gap-2 sm:grid-cols-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 gradient-bg rounded-full flex-shrink-0"></div>
                        <span className="text-xs xs:text-sm text-foreground-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 pt-3 xs:pt-4">
                  <Button 
                    className="btn-primary flex-1 text-sm xs:text-base py-2 xs:py-3"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <Play className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                    <span className="hidden xs:inline">Live Demo</span>
                    <span className="xs:hidden">Demo</span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="btn-secondary xs:flex-shrink-0 text-sm xs:text-base py-2 xs:py-3"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 xs:mt-12 sm:mt-16">
            <div className="glass-card p-4 xs:p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-semibold text-foreground mb-3 xs:mb-4">
                Want to see more?
              </h3>
              <p className="text-foreground-secondary mb-4 xs:mb-6 text-sm xs:text-base px-2">
                Check out my GitHub profile for additional projects and contributions to open-source repositories.
              </p>
              <Button 
                className="btn-primary text-sm xs:text-base py-2.5 xs:py-3 px-4 xs:px-6"
                onClick={() => window.open('https://github.com/kritikadevi', '_blank')}
              >
                <Github className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;