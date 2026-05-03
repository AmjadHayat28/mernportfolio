import { ExternalLink, Github } from "lucide-react";
import projectTaskmaster from "@/assets/project-taskmaster.jpg";
import projectChatverse from "@/assets/project-chatverse.jpg";
import projectAirmonitor from "@/assets/project-airmonitor.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectBlogify from "@/assets/project-blogify.jpg";

const projects = [
  {
    title: "TaskMaster Pro",
    description: "Full-stack productivity app with user authentication, task creation, deadlines, and progress tracking.",
    image: projectTaskmaster,
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    live: "#",
    github: "#",
  },
  {
    title: "ChatVerse",
    description: "Real-time chat application with multiple rooms, private messaging, and notifications.",
    image: projectChatverse,
    tech: ["Socket.io", "Node.js", "Express.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Smart Air Monitoring",
    description: "Real-time sensor data collection with interactive dashboards for monitoring air quality.",
    image: projectAirmonitor,
    tech: ["React.js", "Node.js", "IoT", "Chart.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio showcasing skills, projects, and contact info.",
    image: projectPortfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "Blogify",
    description: "Full-stack blogging platform with authentication, comments, likes, and CRUD operations.",
    image: projectBlogify,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "#",
    github: "#",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300">
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-heading font-medium text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a
          href={project.live}
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          <ExternalLink size={14} /> Live Site
        </a>
        <a
          href={project.github}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects">
    <h2 className="text-2xl font-heading font-medium text-foreground mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
