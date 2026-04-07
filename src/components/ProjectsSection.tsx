import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sales Performance Dashboard",
    client: "MidWest Retail Solutions Inc.",
    period: "Nov 2024 – Present",
    description: "Improved sales tracking efficiency by 35% through dynamic Power BI dashboards covering revenue, margins, and growth metrics.",
    tags: ["Power BI", "DAX", "KPI Tracking"],
  },
  {
    title: "Customer Churn Analysis & Prediction",
    client: "BrightPath Telecom LLC",
    period: "April 2023 – Nov 2024",
    description: "Identified high-risk customers with 85%+ accuracy, enabling targeted retention campaigns. Built Power BI dashboards visualizing churn trends.",
    tags: ["Python", "EDA", "SQL", "Power BI"],
    highlights: [
      "85%+ churn prediction accuracy",
      "30% improved campaign targeting",
      "Cohort analysis & segmentation",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Real-world analytics solutions delivering business impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:glow-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              
              <p className="font-mono text-primary text-xs mb-1">{project.period}</p>
              <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{project.client}</p>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-5">{project.description}</p>

              {project.highlights && (
                <ul className="mb-5 space-y-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
