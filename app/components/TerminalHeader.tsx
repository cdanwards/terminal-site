import React from "react";

const TerminalHeader: React.FC = () => {
  return (
    <div className="border-b p-2 mb-4 rounded-t-md terminal-header">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 bg-muted-magenta rounded-full"></div>
            <div className="w-3 h-3 bg-turquoise-teal rounded-full"></div>
            <div className="w-3 h-3 bg-mustard-gold rounded-full"></div>
          </div>
          <h1 className="command-text font-bold">Dan Edwards</h1>
        </div>
        <div className="text-gray-400 text-xs">~/👋</div>
      </div>
    </div>
  );
};

export default TerminalHeader;
