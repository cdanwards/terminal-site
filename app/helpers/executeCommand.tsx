import React from "react";
import { PortfolioCommands } from "./Commands";
import Initial from "../components/options/Initial";
import About from "../components/options/About";
import Contact from "../components/options/Contact";
import Resume from "../components/options/Resume";
import Skills from "../components/options/Skills";
import Help from "../components/options/Help";
import Surprise from "../components/options/Surprise";
import Projects from "../components/options/Projects";
import Download from "../components/options/Download";
import Ls from "../components/options/Ls";
import Game from "../components/options/Game";
import Theme from "../components/options/Theme";

function executeCommand(command: string): React.FC | React.JSX.Element {
  const lowercaseCommand = command.toLowerCase().trim();

  switch (lowercaseCommand) {
    case PortfolioCommands.Initial:
      return Initial;
    case PortfolioCommands.About:
      return About;
    case PortfolioCommands.Projects:
      return Projects;
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
    case PortfolioCommands.Download:
      return Download;
    case PortfolioCommands.Ls:
      return Ls;
    case PortfolioCommands.Game:
      return Game;
    case PortfolioCommands.Theme:
      return Theme;
    default:
      return (
        <p>Command not recognized. Type `help` to see all available options.</p>
      );
  }
}

export { executeCommand };
