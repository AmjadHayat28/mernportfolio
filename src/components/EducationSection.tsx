import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => (
  <section id="education">
    <h2 className="text-2xl font-heading font-medium text-foreground mb-8">Education & Certifications</h2>
    <div className="space-y-6">
      <div className="flex gap-4 items-start">
        <div className="mt-1 p-2 rounded-md bg-card border border-border">
          <GraduationCap size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-medium text-foreground">Bachelor's in Computer System Engineering</h3>
          <p className="text-sm text-muted-foreground mt-1">Currently Studying</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <div className="mt-1 p-2 rounded-md bg-card border border-border">
          <Award size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-medium text-foreground">IBM Data Science Professional Certificate</h3>
          <p className="text-sm text-muted-foreground mt-1">Coursera</p>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
