import React from "react";

const TerminalHeader: React.FC = () => {
  return (
    <div className="border-b p-2 mb-4 rounded-t-md terminal-header">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="command-text font-bold">Dan Edwards</h1>
        </div>
        <div className="text-gray-400 text-xs">~/👋</div>
      </div>
    </div>
  );
};

export default TerminalHeader;
