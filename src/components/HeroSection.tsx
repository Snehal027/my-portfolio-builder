import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-pulse-glow">
          Data Analyst
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">Snehal</span>{" "}
          <span className="text-foreground">Nalawade</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Transforming complex datasets into actionable insights. 2+ years at Accenture specializing in data visualization, business intelligence & analytics.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Pune, India</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/Snehal027"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/snehal-ramesh-nalawade/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:snehalrameshnalawade9@gmail.com"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
