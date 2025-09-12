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
    <section id="skills" className="py-20 relative scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Skills & Expertise
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              A comprehensive skill set spanning modern web technologies, 
              databases, and essential soft skills for effective collaboration.
            </p>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mt-6"></div>
          </div>

          {/* Technical Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Core Competencies
              </h3>
              <p className="text-foreground-secondary">
                Essential soft skills that complement technical expertise
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="glass-card-hover p-6 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                    <h4 className="font-medium text-foreground">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-foreground-secondary italic">
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