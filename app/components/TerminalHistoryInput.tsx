import React from "react";
import { executeCommand } from "../helpers/executeCommand";

type TerminalHistoryInputProps = {
  command: string;
  clearHistory: () => void;
};

const TerminalHistoryInput: React.FC<TerminalHistoryInputProps> = ({
  command,
  clearHistory,
}) => {
  if (command.trim().toLowerCase() === "clear") {
    clearHistory();
    return null;
  }

  const result = executeCommand(command);

  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center mb-1">
        <span className="prompt-sign mr-2">$</span>
        <span className="command-text">{command}</span>
      </div>
      <div className="pl-4 output-text">
        {typeof result === "function" ? result({}) : result}
      </div>
    </div>
  );
};

export default TerminalHistoryInput;
