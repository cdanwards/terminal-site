"use client";

import React from "react";

type CommandChipsProps = {
  onCommand: (cmd: string) => void;
};

const quickCommands = ["help", "about", "projects", "skills", "contact"];

const CommandChips: React.FC<CommandChipsProps> = ({ onCommand }) => {
  return (
    <div className="flex flex-wrap gap-2 py-2 md:hidden">
      {quickCommands.map((cmd) => (
        <button
          key={cmd}
          onClick={() => onCommand(cmd)}
          className="px-3 py-1.5 rounded-full text-xs border command-chip font-mono"
          type="button"
        >
          {cmd}
        </button>
      ))}
    </div>
  );
};

export default CommandChips;
