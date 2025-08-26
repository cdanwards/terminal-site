import React from "react";

const Skills: React.FC = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "React Native",
        "Expo",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Apollo",
        "Node.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Tailwind UI",
      ],
    },
    {
      title: "State Management",
      skills: ["Redux", "MST", "Zustand", "React Context"],
    },
    {
      title: "Testing",
      skills: [
        "Jest",
        "React Testing Library",
        "Cypress",
        "Playwright",
        "Detox",
        "Maestro",
        "Storybook",
      ],
    },
    {
      title: "DevOps & Scaling",
      skills: [
        "EAS",
        "GitHub Actions",
        "Jenkins",
        "GitLab CI",
        "Docker",
        "Kubernetes",
        "AWS",
        "Monorepos (Yarn Workspaces, Changesets)",
      ],
    },
    {
      title: "Collaboration & Leadership",
      skills: [
        "Agile",
        "Design Sprints",
        "Stakeholder Communication",
        "Mentorship",
        "Accessibility & Performance Improvements",
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>

      <div className="skills-categories">
        {skillsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skills-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
