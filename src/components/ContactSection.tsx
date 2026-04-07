import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Open to data analyst opportunities and collaborations
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:snehalrameshnalawade9@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-foreground truncate">snehalrameshnalawade9@gmail.com</span>
            </a>
            <a
              href="tel:+919373235435"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">+91 9373235435</span>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">Pune, India</span>
            </div>
            <a
              href="https://snehal027.github.io/Snehal_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">Portfolio</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Snehal027"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/snehal-ramesh-nalawade/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p className="text-muted-foreground text-xs mt-16">
            © 2025 Snehal Nalawade. Built with passion for data.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
