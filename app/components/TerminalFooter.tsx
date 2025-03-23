import React from "react";

const TerminalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="border-t p-2 text-center text-gray-400 text-xs terminal-footer mt-auto"
      style={{ borderColor: "var(--terminal-border)" }}
    >
      <p>© {currentYear} Dan Edwards. All rights reserved.</p>
    </div>
  );
};

export default TerminalFooter;
