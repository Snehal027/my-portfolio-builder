import { Briefcase, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  { metric: "30%", label: "Faster Reporting", description: "Designed 10+ interactive Power BI dashboards with advanced DAX for real-time KPI tracking" },
  { metric: "40%", label: "Less Manual Work", description: "Automated recurring reports using Excel VBA & Power BI Service, saving 20+ hours/month" },
  { metric: "25%", label: "Better Decisions", description: "Cleaned and transformed large datasets with Python, eliminating inconsistencies" },
  { metric: "35%", label: "Faster Data Retrieval", description: "Optimized complex SQL queries (CTEs, joins, window functions) across high-volume datasets" },
  { metric: "30%", label: "Reduced Processing Time", description: "Built scalable ETL pipelines and implemented structured data models" },
  { metric: "100%", label: "Compliance", description: "Implemented Row-Level Security across all dashboards ensuring data access policies" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
            Driving measurable impact through data at scale
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-6 h-6 text-primary" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">Data Analyst – Accenture</h3>
              <p className="text-muted-foreground text-sm">April 2023 – Present · Pune, India</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <ScrollReveal key={a.label} delay={i * 100}>
              <div className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-gradient">{a.metric}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{a.label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
