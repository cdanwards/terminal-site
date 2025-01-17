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
  return (
    <div className="py-8">
      {inputs.map((input, index) => (
        <React.Fragment key={index}>
          <TerminalHistoryInput command={input} clearHistory={clearHistory} />
          {index !== inputs.length - 1 && <div style={{ marginTop: "10px" }} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TerminalHistoryList;
