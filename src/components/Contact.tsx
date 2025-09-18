import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      }, (error) => {
        console.log('FAILED...', error.text);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
    <section id="contact" className="py-10 xs:py-12 sm:py-16 md:py-20 relative scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-4 xs:left-1/3 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-4 xs:right-1/3 w-40 h-40 xs:w-60 xs:h-60 sm:w-80 sm:h-80 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 xs:mb-6">
              Let's Connect
            </h2>
            <p className="text-foreground-secondary text-sm xs:text-base sm:text-lg max-w-3xl mx-auto px-4">
              Ready to discuss your next project, explore collaboration opportunities, 
              or simply connect? I'd love to hear from you!
            </p>
            <div className="w-16 xs:w-20 sm:w-24 h-1 gradient-bg mx-auto rounded-full mt-4 xs:mt-6"></div>
          </div>

          <div className="grid gap-8 xs:gap-10 sm:gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6 xs:space-y-8">
              <div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-semibold text-foreground mb-4 xs:mb-6">
                  Get in Touch
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-6 xs:mb-8 text-sm xs:text-base">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or potential collaborations. Whether you're a recruiter, fellow developer, 
                  or someone with an exciting project idea, let's start a conversation!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 xs:space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="glass-card p-4 xs:p-6 hover-lift group">
                    <div className="flex items-center gap-3 xs:gap-4">
                      <div className={`p-2 xs:p-3 glass-card rounded-lg ${contact.color} bg-gradient-to-br from-current/20 to-current/5 flex-shrink-0`}>
                        <contact.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs xs:text-sm text-foreground-secondary uppercase tracking-wide mb-1">
                          {contact.label}
                        </div>
                        <a 
                          href={contact.href}
                          className="text-sm xs:text-base text-foreground font-medium hover:text-brand-primary transition-colors break-all"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 xs:pt-8">
                <h4 className="text-base xs:text-lg font-poppins font-semibold text-foreground mb-4 xs:mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-3 xs:gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className={`w-10 h-10 xs:w-12 xs:h-12 glass-card-hover ${social.color} transition-colors duration-300`}
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-4 xs:p-6 sm:p-8">
              <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
                <div className="p-1.5 xs:p-2 glass-card rounded-lg">
                  <MessageSquare className="w-4 h-4 xs:w-5 xs:h-5 text-brand-primary" />
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-semibold text-foreground">
                  Send Message
                </h3>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs xs:text-sm font-medium text-foreground-secondary">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-background-secondary border-card-border focus:border-brand-primary text-sm xs:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs xs:text-sm font-medium text-foreground-secondary">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-background-secondary border-card-border focus:border-brand-primary text-sm xs:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs xs:text-sm font-medium text-foreground-secondary">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="bg-background-secondary border-card-border focus:border-brand-primary resize-none text-sm xs:text-base"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full group text-sm xs:text-base py-2.5 xs:py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-3 h-3 xs:w-4 xs:h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 xs:mt-6 pt-4 xs:pt-6 border-t border-card-border text-center">
                <p className="text-xs xs:text-sm text-foreground-secondary px-2">
                  Prefer email? Reach me directly at{" "}
                  <a 
                    href="mailto:kritikadevi012@gmail.com" 
                    className="text-brand-primary hover:underline break-all"
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