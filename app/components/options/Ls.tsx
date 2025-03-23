import React from "react";
import { PortfolioCommands } from "../../helpers/Commands";

const Ls: React.FC = () => {
  // Filter out 'initial' as it's not a user-facing command
  const commands = Object.values(PortfolioCommands).filter(
    (cmd) => cmd !== PortfolioCommands.Initial
  );

  return (
    <div>
      <div className="mb-2">
        <span className="text-green-400 font-bold">Available commands:</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {commands.map((command, index) => (
          <div key={index} className="flex items-center">
            <span className="text-blue-400 mr-2">→</span>
            <span>{command}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ls;
