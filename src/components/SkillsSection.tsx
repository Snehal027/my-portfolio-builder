import { Database, BarChart3, Code2, Cloud, Bot, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    skills: ["Power BI", "DAX", "Power Query", "KPI Dashboards", "Row-Level Security", "Excel Dashboards"],
  },
  {
    icon: Code2,
    title: "Data Analysis",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Profiling"],
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["MySQL", "PostgreSQL", "SQL (Joins, CTEs)", "Data Modelling", "ETL Pipelines"],
  },
  {
    icon: Bot,
    title: "Automation & Reporting",
    skills: ["Excel VBA", "Power BI Service", "Workflow Automation"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: ["AWS", "Azure Fundamentals", "Git", "Jupyter Notebook"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Data Storytelling", "Business Communication", "Problem Solving"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
            Tools and technologies I use to turn raw data into business value
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-border hover:-translate-y-1 h-full">
                <cat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
