import { GraduationCap, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    institution: "SNTD Women's University, Mumbai",
    degree: "Master of Computer Application (MCA)",
    period: "Aug 2023 – March 2025",
    grade: "CGPA: 8.71",
  },
  {
    institution: "Shivaji University, Kolhapur",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "July 2020 – March 2023",
    grade: "81.22%",
  },
];

const certifications = [
  "Master Data Science & AI",
  "Data Analysis with GenAI",
  "Accenture LearnVantage Program",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={200}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <p className="font-mono text-primary text-xs mb-1">{edu.period}</p>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-primary text-sm font-mono mt-2">{edu.grade}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={400}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-4 rounded-xl bg-background border border-border flex items-center gap-3 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
