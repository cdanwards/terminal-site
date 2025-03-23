import React from "react";

const Skills: React.FC = () => {
  const skillsList = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Angular2+",
    "NestJS",
    "Apollo GraphQL",
    "SASS",
    "jQuery",
    "Backbone.js",
    "Node.js",
    "SQL (MySQL, MSSQL)",
    "NoSQL",
    "Docker",
    "CI/CD Pipelines",
    "Data Analysis",
    "Responsive Design",
    "RESTful APIs",
    "Git",
    "Agile Methodologies",
  ];

  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
