import React from "react";
import { PortfolioCommands } from "./Commands";
import { commandAliases } from "./commandAliases";
import { findClosestCommand } from "./fuzzyMatch";
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
// Easter egg commands
import Whoami from "../components/options/Whoami";
import Pwd from "../components/options/Pwd";
import Sudo from "../components/options/Sudo";
import Cowsay from "../components/options/Cowsay";
import DateCmd from "../components/options/DateCmd";
import Cat from "../components/options/Cat";
import Man from "../components/options/Man";
import Rm from "../components/options/Rm";
import Exit from "../components/options/Exit";
import Neofetch from "../components/options/Neofetch";
import Matrix from "../components/options/Matrix";

// All valid commands for fuzzy matching
const allCommands = [
  ...Object.values(PortfolioCommands).filter((cmd) => cmd !== "initial"),
  "clear",
];

function executeCommand(fullCommand: string): React.ReactNode {
  const trimmed = fullCommand.trim();
  const parts = trimmed.split(/\s+/);
  const firstWord = parts[0].toLowerCase();
  const args = parts.slice(1);

  // Check for multi-word aliases first (like "rm -rf")
  const fullLower = trimmed.toLowerCase();
  let cmd = commandAliases[fullLower] || commandAliases[firstWord] || firstWord;

  // Handle commands with arguments
  if (cmd === PortfolioCommands.Theme || firstWord === "theme") {
    const mode = args[0]?.toLowerCase();
    return <Theme mode={mode} />;
  }

  if (cmd === PortfolioCommands.Echo || firstWord === "echo") {
    const text = parts.slice(1).join(" ");
    return <p className="font-mono">{text || ""}</p>;
  }

  switch (cmd) {
    case PortfolioCommands.Initial:
      return <Initial />;
    case PortfolioCommands.About:
      return <About />;
    case PortfolioCommands.Projects:
      return <Projects />;
    case PortfolioCommands.Resume:
      return <Resume />;
    case PortfolioCommands.Contact:
      return <Contact />;
    case PortfolioCommands.Skills:
      return <Skills />;
    case PortfolioCommands.Help:
      return <Help />;
    case PortfolioCommands.Surprise:
      return <Surprise />;
    case PortfolioCommands.Download:
      return <Download />;
    case PortfolioCommands.Ls:
      return <Ls />;
    case PortfolioCommands.Game:
      return <Game />;
    // Easter egg commands
    case PortfolioCommands.Whoami:
      return <Whoami />;
    case PortfolioCommands.Pwd:
      return <Pwd />;
    case PortfolioCommands.Sudo:
      return <Sudo />;
    case PortfolioCommands.Cowsay:
      return <Cowsay />;
    case PortfolioCommands.Date:
      return <DateCmd />;
    case PortfolioCommands.Cat:
      return <Cat />;
    case PortfolioCommands.Man:
      return <Man />;
    case PortfolioCommands.Rm:
      return <Rm />;
    case PortfolioCommands.Exit:
      return <Exit />;
    case PortfolioCommands.Neofetch:
      return <Neofetch />;
    case PortfolioCommands.Matrix:
      return <Matrix />;
    default: {
      // Try fuzzy matching for typos
      const suggestion = findClosestCommand(cmd, allCommands);
      if (suggestion) {
        return (
          <p>
            Command not recognized. Did you mean <code>`{suggestion}`</code>?
          </p>
        );
      }
      return (
        <p>
          Command not recognized. Type <code>`help`</code> to see all available
          options.
        </p>
      );
    }
  }
}

export { executeCommand };
