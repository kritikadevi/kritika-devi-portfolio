import { Code, Database, Server, Palette, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-brand-primary",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "text-brand-secondary",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "NestJS", level: 75 },
        { name: "REST APIs", level: 88 },
        { name: "Java", level: 90 }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-brand-accent",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Git", level: 90 },
        { name: "Java AWT", level: 75 }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Leadership", icon: Users },
    { name: "Communication", icon: Users },
    { name: "Team Collaboration", icon: Users }
  ];

  return (
    <section id="skills" className="py-10 xs:py-12 sm:py-16 md:py-20 relative scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-4 xs:right-10 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-4 xs:left-10 w-40 h-40 xs:w-60 xs:h-60 sm:w-80 sm:h-80 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 xs:mb-6">
              Skills & Expertise
            </h2>
            <p className="text-foreground-secondary text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4">
              A comprehensive skill set spanning modern web technologies, 
              databases, and essential soft skills for effective collaboration.
            </p>
            <div className="w-16 xs:w-20 sm:w-24 h-1 gradient-bg mx-auto rounded-full mt-4 xs:mt-6"></div>
          </div>

          {/* Technical Skills */}
          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 xs:mb-12 sm:mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-8 hover-lift">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 glass-card rounded-lg ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground-secondary font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-brand-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-4 xs:p-6 sm:p-8">
            <div className="text-center mb-6 xs:mb-8">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-semibold text-foreground mb-3 xs:mb-4">
                Core Competencies
              </h3>
              <p className="text-sm xs:text-base text-foreground-secondary px-2">
                Essential soft skills that complement technical expertise
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="glass-card-hover p-3 xs:p-4 sm:p-6 rounded-lg mb-2 xs:mb-4 group-hover:scale-105 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-brand-accent mx-auto mb-2 xs:mb-3" />
                    <h4 className="font-medium text-foreground text-xs xs:text-sm sm:text-base">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 xs:mt-10 sm:mt-12 px-4">
            <p className="text-foreground-secondary italic text-sm xs:text-base max-w-3xl mx-auto">
              "Continuously learning and adapting to new technologies and methodologies 
              to stay at the forefront of software development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;