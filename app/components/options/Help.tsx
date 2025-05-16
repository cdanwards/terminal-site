import React from "react";
import { PortfolioCommands } from "../../helpers/Commands";

const Help: React.FC = () => {
  // Get all commands except 'initial' which is not a user command
  const commands = Object.values(PortfolioCommands)
    .filter((cmd) => cmd !== PortfolioCommands.Initial)
    .sort();

  // Add the clear command which isn't in the enum
  const allCommands = [...commands, "clear"];

  return (
    <div className="output-text">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-turquoise-teal">
          Available Commands:
        </h3>
        <p className="text-sm mt-1 text-gray-400">
          Type any of these commands to navigate the site
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {allCommands.map((cmd, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-2 text-turquoise-teal">•</span>
            <div>
              <div className="font-bold command-text text-muted-magenta">
                {cmd}
              </div>
              <div className="text-xs text-gray-400">
                {getCommandDescription(cmd)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Press <span className="bg-gray-800 px-2 py-0.5 rounded">Tab</span> to
        autocomplete, use{" "}
        <span className="bg-gray-800 px-2 py-0.5 rounded">↑</span>
        <span className="bg-gray-800 px-2 py-0.5 rounded">↓</span> to navigate
        history
      </p>
    </div>
  );
};

function getCommandDescription(command: string): string {
  switch (command) {
    case PortfolioCommands.About:
      return "Learn about me";
    case PortfolioCommands.Projects:
      return "View my project portfolio";
    case PortfolioCommands.Resume:
      return "See my work experience";
    case PortfolioCommands.Contact:
      return "Get my contact information";
    case PortfolioCommands.Skills:
      return "Check out my skills";
    case PortfolioCommands.Help:
      return "Show available commands";
    case PortfolioCommands.Surprise:
      return "Something fun!";
    case PortfolioCommands.Download:
      return "Download my resume as PDF";
    case PortfolioCommands.Ls:
      return "List all commands";
    case PortfolioCommands.Game:
      return "Play a simple game";
    case PortfolioCommands.Theme:
      return "Toggle light/dark mode";
    case "clear":
      return "Clear terminal history";
    default:
      return "";
  }
}

export default Help;
