import React, { memo } from "react";
import { executeCommand } from "../helpers/executeCommand";

type TerminalHistoryInputProps = {
  command: string;
  clearHistory: () => void;
};

const TerminalHistoryInput: React.FC<TerminalHistoryInputProps> = memo(
  ({ command, clearHistory }) => {
    if (command.trim().toLowerCase() === "clear") {
      clearHistory();
      return null;
    }

    // Handle command chaining with &&
    if (command.includes("&&")) {
      const commands = command
        .split("&&")
        .map((c) => c.trim())
        .filter(Boolean);

      return (
        <div className="flex flex-col p-2">
          <div className="flex items-center mb-1">
            <span className="prompt-sign mr-2">$</span>
            <span className="command-text">{command}</span>
          </div>
          <div className="pl-4 output-text space-y-3">
            {commands.map((cmd, index) => (
              <div key={index} className="border-l-2 border-terminal-border pl-3">
                {executeCommand(cmd)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    const result = executeCommand(command);

    return (
      <div className="flex flex-col p-2">
        <div className="flex items-center mb-1">
          <span className="prompt-sign mr-2">$</span>
          <span className="command-text">{command}</span>
        </div>
        <div className="pl-4 output-text">{result}</div>
      </div>
    );
  }
);

TerminalHistoryInput.displayName = "TerminalHistoryInput";

export default TerminalHistoryInput;
