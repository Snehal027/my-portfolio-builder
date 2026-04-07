import { Suspense, lazy } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Scene3D = lazy(() => import("./Scene3D"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        width={1920}
        height={1080}
      />

      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <ScrollReveal direction="down" delay={200}>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-pulse">
            Data Analyst
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Snehal</span>{" "}
            <span className="text-foreground">Nalawade</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming complex datasets into actionable insights. 2+ years at Accenture specializing in data visualization, business intelligence & analytics.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Pune, India</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Snehal027"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/snehal-ramesh-nalawade/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:snehalrameshnalawade9@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" style={{ animation: "float 3s ease-in-out infinite" }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
