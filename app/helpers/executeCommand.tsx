import React from "react";
import { PortfolioCommands } from "./Commands";
import Initial from "../components/options/initial";
import About from "../components/options/about";
import Contact from "../components/options/contact";
import Resume from "../components/options/resume";
import Skills from "../components/options/skills";
import Help from "../components/options/Help";
function executeCommand(command: string): React.FC | React.JSX.Element {
  switch (command) {
    case PortfolioCommands.Initial:
      return Initial;
    case PortfolioCommands.About:
      return About;
    case PortfolioCommands.Projects:
      return <p>Projects: [Your Projects Info]</p>;
    case PortfolioCommands.Resume:
      return Resume;
    case PortfolioCommands.Contact:
      return Contact;
    case PortfolioCommands.Skills:
      return Skills;
    case PortfolioCommands.Help:
      return Help;
    case PortfolioCommands.Surprise:
      return <p>Surprise: [Your Surprise Info]</p>;
    default:
      return (
        <p>Command not recognized. Type `help` to see all available options.</p>
      );
  }
}

export { executeCommand };
