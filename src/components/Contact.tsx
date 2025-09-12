import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kritikadevi012@gmail.com",
      href: "mailto:kritikadevi012@gmail.com",
      color: "text-brand-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9541260886",
      href: "tel:+919541260886",
      color: "text-brand-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Srinagar, Jammu & Kashmir",
      href: "#",
      color: "text-brand-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kritikadevi",
      color: "text-foreground-secondary hover:text-brand-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kritika-devi-873439319",
      color: "text-foreground-secondary hover:text-brand-secondary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kritikadevi012@gmail.com",
      color: "text-foreground-secondary hover:text-brand-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Let's Connect
            </h2>
            <p className="text-foreground-secondary text-lg max-w-3xl mx-auto">
              Ready to discuss your next project, explore collaboration opportunities, 
              or simply connect? I'd love to hear from you!
            </p>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or potential collaborations. Whether you're a recruiter, fellow developer, 
                  or someone with an exciting project idea, let's start a conversation!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="glass-card p-6 hover-lift group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 glass-card rounded-lg ${contact.color} bg-gradient-to-br from-current/20 to-current/5`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-foreground-secondary uppercase tracking-wide mb-1">
                          {contact.label}
                        </div>
                        <a 
                          href={contact.href}
                          className="text-foreground font-medium hover:text-brand-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-poppins font-semibold text-foreground mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className={`w-12 h-12 glass-card-hover ${social.color} transition-colors duration-300`}
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 glass-card rounded-lg">
                  <MessageSquare className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-foreground">
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-secondary">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-background-secondary border-card-border focus:border-brand-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-secondary">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-background-secondary border-card-border focus:border-brand-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground-secondary">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="bg-background-secondary border-card-border focus:border-brand-primary resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-card-border text-center">
                <p className="text-sm text-foreground-secondary">
                  Prefer email? Reach me directly at{" "}
                  <a 
                    href="mailto:kritikadevi012@gmail.com" 
                    className="text-brand-primary hover:underline"
                  >
                    kritikadevi012@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;