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
    <div className="flex p-2">
      {typeof result === "function" ? result({}) : result}
    </div>
  );
};

export default TerminalHistoryInput;
