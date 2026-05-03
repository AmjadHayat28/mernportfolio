import Sidebar from "@/components/Sidebar";
import MERNVisualizer from "@/components/MERNVisualizer";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Mobile nav */}
      <div className="lg:hidden flex gap-4 px-8 py-4 overflow-x-auto border-b border-border text-sm">
        {["About", "Projects", "Skills", "Education", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Main content */}
      <main className="lg:ml-[35%] px-8 lg:px-16 py-12 lg:py-16">
        <div className="max-w-3xl space-y-[120px]">
          {/* MERN Visualizer */}
          <div>
            <MERNVisualizer />
            <p className="text-center text-xs text-muted-foreground mt-2">
              Hover to explore the data flow
            </p>
          </div>

          {/* About */}
          <section id="about">
            <h2 className="text-2xl font-heading font-medium text-foreground mb-6">About</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I'm a highly motivated Full-Stack Developer specializing in the MERN stack. I build scalable, responsive, and user-friendly web applications with clean code and best development practices.
              </p>
              <p>
                My approach integrates frontend and backend seamlessly — from designing intuitive React interfaces to architecting robust Node.js APIs backed by MongoDB. I thrive in agile, collaborative environments and continuously push to deliver production-grade solutions.
              </p>
            </div>
          </section>

          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />

          {/* Footer */}
          <footer className="pt-8 border-t border-border pb-12">
            <p className="text-xs text-muted-foreground">
              © 2024 Amjad Hayat. Built with React & Tailwind CSS.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
