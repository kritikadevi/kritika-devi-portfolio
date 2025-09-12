import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-poppins font-semibold text-foreground">
                Full Stack Developer with a Passion for Innovation
              </h3>
              
              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
              Motivated Information Technology undergraduate at NIT Srinagar with strong foundations in Data Structures & Algorithms and 
              practical experience in Full Stack Development. Skilled in Java, React, Node.js, and RESTful APIs, with a proven ability to design and build scalable, user-focused applications. 
              Passionate about problem-solving, innovation, and continuous learning, with a strong drive to grow as a Software Engineer.
                </p>
                
                {/* <p>
                  My journey in software development is driven by a passion for problem-solving and creating 
                  impactful digital solutions. I specialize in building scalable, user-focused applications 
                  with a strong foundation in Data Structures & Algorithms.
                </p> */}

                <p>
                  Beyond coding, I'm deeply interested in emerging technologies and constantly learning 
                  new frameworks and tools to stay at the forefront of modern development practices.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">8.03</div>
                  <div className="text-sm text-foreground-secondary">CGPA</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-foreground-secondary">Projects</div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-poppins font-semibold text-foreground">
                Education Journey
              </h3>

              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 gradient-bg rounded-full"></div>

                {/* NIT Srinagar */}
                <div className="relative pl-16">
                  <div className="absolute left-4 top-2 w-4 h-4 gradient-bg rounded-full border-4 border-background"></div>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="p-2 glass-card rounded-lg">
                        <GraduationCap className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">
                          B.Tech in Information Technology
                        </h4>
                        <p className="text-brand-primary font-medium mb-2">
                          National Institute of Technology, Srinagar
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground-secondary mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            2023 - 2027
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            CGPA: 8.03
                          </div>
                        </div>
                        <p className="text-foreground-secondary text-sm">
     Information Technology undergraduate at NIT Srinagar with a strong foundation in
      Data Structures & Algorithms and Full Stack Development, passionate 
     about solving complex problems and creating scalable digital solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="relative pl-16">
                  <div className="absolute left-4 top-2 w-4 h-4 gradient-bg rounded-full border-4 border-background"></div>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="p-2 glass-card rounded-lg">
                        <GraduationCap className="w-5 h-5 text-brand-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">
                          Higher Secondary Education
                        </h4>
                        <p className="text-brand-secondary font-medium mb-2">
                          Army Public School, Janglot Jammu & Kashmir
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground-secondary mb-3">
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            93.4% Score
                          </div>
                        </div>
                        <p className="text-foreground-secondary text-sm">
                       Completed Higher Secondary Education (Non-Medical) with distinction, developing a strong foundation in Mathematics and Sciences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;