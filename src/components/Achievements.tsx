import { Award, Palette, Music, Trophy, Star, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Rangoli Designing",
      description: "Showcased creative rangoli designs in various cultural events and festivals, demonstrating artistic skills and cultural appreciation.",
      icon: Award,
      color: "text-brand-primary",
      category: "Cultural Arts",
      highlights: ["College Cultural Events", "Festival Celebrations", "Community Showcases"],
      year: "2023-2024"
    },
    {
      title: "Painting Exhibitions",
      description: "Exhibited artwork in school and college galleries, exploring various mediums and styles while expressing creativity through visual arts.",
      icon: Palette,
      color: "text-brand-secondary",
      category: "Visual Arts",
      highlights: ["School Art Gallery", "College Exhibitions", "Mixed Media Works"],
      year: "2020-2024"
    },
    {
      title: "Dance Performances",
      description: "Performed in inter-school dance competitions, showcasing rhythm, coordination, and stage presence in various dance forms.",
      icon: Music,
      color: "text-brand-accent",
      category: "Performing Arts",
      highlights: ["Inter-school Competitions", "Cultural Programs", "Team Collaborations"],
      year: "2019-2023"
    }
  ];

  const stats = [
    { number: "8.03", label: "Current CGPA", icon: Trophy },
    { number: "93%", label: "12th Grade", icon: Star },
    { number: "5+", label: "Art Exhibitions", icon: Palette },
    { number: "10+", label: "Performances", icon: Music }
  ];

  return (
    <section id="achievements" className="py-10 xs:py-12 sm:py-16 md:py-20 relative scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-36 h-36 xs:w-48 xs:h-48 sm:w-72 sm:h-72 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-0 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 xs:mb-6">
              Achievements & Extracurriculars
            </h2>
            <p className="text-foreground-secondary text-sm xs:text-base sm:text-lg max-w-3xl mx-auto px-4">
              Beyond technical skills, I believe in holistic development through arts, 
              culture, and creative expression that enhance leadership and collaboration abilities.
            </p>
            <div className="w-16 xs:w-20 sm:w-24 h-1 gradient-bg mx-auto rounded-full mt-4 xs:mt-6"></div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mb-8 xs:mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <div className="p-3 glass-card rounded-lg">
                    <stat.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground-secondary text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Timeline */}
          <div className="space-y-6 xs:space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative">
                {/* Timeline connector - Hidden on mobile */}
                {index < achievements.length - 1 && (
                  <div className="hidden xs:block absolute left-4 xs:left-6 top-16 xs:top-20 w-0.5 h-20 xs:h-24 gradient-bg rounded-full opacity-30"></div>
                )}
                
                <div className="flex items-start gap-4 xs:gap-6 sm:gap-8">
                  {/* Icon & Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 glass-card rounded-full flex items-center justify-center hover-lift">
                      <achievement.icon className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${achievement.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card p-4 xs:p-6 sm:p-8 hover-lift min-w-0">
                    <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2 xs:gap-4 mb-3 xs:mb-4">
                      <div className="min-w-0">
                        <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2">
                          <h3 className="text-base xs:text-lg sm:text-xl font-poppins font-semibold text-foreground">
                            {achievement.title}
                          </h3>
                          <span className="px-2 py-1 text-xs bg-background-secondary text-foreground-secondary rounded-full border border-card-border self-start">
                            {achievement.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs xs:text-sm text-foreground-secondary">
                          <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
                          {achievement.year}
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-secondary leading-relaxed mb-4 xs:mb-6 text-sm xs:text-base">
                      {achievement.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 xs:space-y-3">
                      <h4 className="text-xs xs:text-sm font-semibold text-foreground-secondary uppercase tracking-wide">
                        Highlights
                      </h4>
                      <div className="flex flex-wrap gap-1.5 xs:gap-2">
                        {achievement.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-1.5 xs:gap-2 px-2 py-1.5 xs:px-3 xs:py-2 bg-background-secondary rounded-lg border border-card-border">
                            <div className="w-1.5 h-1.5 gradient-bg rounded-full flex-shrink-0"></div>
                            <span className="text-xs xs:text-sm text-foreground-secondary">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Philosophy */}
          <div className="mt-8 xs:mt-12 sm:mt-16">
            <div className="glass-card p-4 xs:p-6 sm:p-8 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4 xs:mb-6">
                <div className="p-3 xs:p-4 glass-card rounded-full">
                  <Star className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-brand-accent" />
                </div>
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-semibold text-foreground mb-3 xs:mb-4">
                Beyond Code: A Creative Mind
              </h3>
              <p className="text-foreground-secondary text-sm xs:text-base sm:text-lg leading-relaxed px-2">
                "I believe that creativity in arts directly translates to innovative problem-solving in technology. 
                My experience in visual arts, dance, and cultural activities has enhanced my ability to think 
                outside the box, collaborate effectively, and bring aesthetic sensibility to user interface design."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;