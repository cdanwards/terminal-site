import React from "react";
import TerminalHistoryInput from "./TerminalHistoryInput";

type TerminalHistoryListProps = {
  inputs: string[];
};

const TerminalHistoryList: React.FC<TerminalHistoryListProps> = ({
  inputs,
}) => {
  return (
    <div className="py-8">
      {inputs.map((input, index) => (
        <React.Fragment key={index}>
          <TerminalHistoryInput command={input} />
          {index !== inputs.length - 1 && <div style={{ marginTop: "10px" }} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TerminalHistoryList;
