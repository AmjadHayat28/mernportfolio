import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:w-[35%] lg:h-screen flex flex-col justify-between p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border">
      <div>
        <h1 className="text-3xl lg:text-4xl font-heading font-medium tracking-tight text-foreground">
          AMJAD HAYAT
        </h1>
        <p className="mt-2 text-lg text-primary font-heading font-medium">
          Full-Stack MERN Developer
        </p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
          Building scalable, responsive web applications with clean code and seamless frontend-backend integration.
        </p>

        <nav className="mt-10 hidden lg:block">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all duration-200" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 mt-8 lg:mt-0">
        <a
          href="https://github.com/AmjadHayat28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/amjad-hayat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:amjadhayat1045931@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
