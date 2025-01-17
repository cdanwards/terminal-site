import React from "react";
import { PortfolioCommands } from "./Commands";
import Initial from "../components/options/Initial";
import About from "../components/options/About";
import Contact from "../components/options/Contact";
import Resume from "../components/options/Resume";
import Skills from "../components/options/Skills";
import Help from "../components/options/Help";
import Surprise from "../components/options/Surprise";
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
      return Surprise;
    default:
      return (
        <p>Command not recognized. Type `help` to see all available options.</p>
      );
  }
}

export { executeCommand };
