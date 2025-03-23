import React from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Terminal Portfolio Website",
      description:
        "A unique portfolio website that simulates a terminal interface, allowing visitors to navigate through different sections using terminal commands.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      link: "https://github.com/yourusername/terminal-website",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, and secure checkout process.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application that provides real-time weather forecasts based on user location or search.",
      technologies: ["React Native", "TypeScript", "Weather API"],
      link: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Task Management System",
      description:
        "A productivity tool for managing tasks, projects, and deadlines with collaborative features.",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      link: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-md p-4 project-card"
            style={{
              backgroundColor: "var(--project-card-bg)",
              borderColor: "var(--project-card-border)",
            }}
          >
            <h3
              className="text-lg font-semibold project-title"
              style={{ color: "var(--project-title)" }}
            >
              {project.title}
            </h3>
            <p className="my-2 output-text">{project.description}</p>
            <div className="flex flex-wrap gap-2 my-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-md text-xs project-tag"
                  style={{ backgroundColor: "var(--project-tag-bg)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm project-link"
                style={{ color: "var(--project-link)" }}
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
