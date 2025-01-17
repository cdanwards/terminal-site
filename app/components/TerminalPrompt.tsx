import React from "react";

type TerminalPromptProps = {
  addToTerminalHistory: (line: string) => void;
};

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  addToTerminalHistory,
}) => {
  return (
    <div className="flex items-center">
      <span className="text-green-500 mr-2">$</span>
      <input
        className="bg-black text-white px-2 py-1 blinking-cursor"
        type="text"
        placeholder="Enter command..."
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addToTerminalHistory(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default TerminalPrompt;
