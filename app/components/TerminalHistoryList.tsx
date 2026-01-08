import React from "react";
import TerminalHistoryInput from "./TerminalHistoryInput";

type TerminalHistoryListProps = {
  inputs: string[];
  clearHistory: () => void;
};

const TerminalHistoryList: React.FC<TerminalHistoryListProps> = ({
  inputs,
  clearHistory,
}) => {
  // Filter out "initial" placeholder, which shouldn't be shown to the user
  const displayInputs = inputs.filter((input) => input !== "initial");

  return (
    <div
      className="terminal-history"
      role="log"
      aria-live="polite"
      aria-label="Terminal output"
    >
      {displayInputs.map((input, index) => (
        <React.Fragment key={`${input}-${index}`}>
          <TerminalHistoryInput command={input} clearHistory={clearHistory} />
          {index !== displayInputs.length - 1 && <div className="my-2" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TerminalHistoryList;
