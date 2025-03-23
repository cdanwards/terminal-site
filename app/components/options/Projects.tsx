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
      link: "https://github.com/cdanwards/terminal-website",
    },
    {
      title: "Psychosocial",
      description:
        "A parody social media platform inspired by Twitter that allows users to share thoughts, images, and interact with other users in a metal inspired interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/cdanwards/psychosocial",
    },
    {
      title: "Animation Practice",
      description:
        "A collection of React Native animation experiments using React Native's Animation API to create engaging user interfaces and interactions.",
      technologies: [
        "React Native",
        "React Animation API",
        "TypeScript",
        "Expo",
      ],
      link: "https://github.com/cdanwards/animation-practice",
    },
    {
      title: "Word Assassins",
      description:
        "A multiplayer word game where players compete to eliminate other players by getting them to say their assigned target words.",
      technologies: ["React Native", "Firebase", "Socket.io", "Node.js"],
      link: "https://github.com/cdanwards/word-assassins",
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
