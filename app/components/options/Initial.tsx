import React, { useState, useEffect } from "react";

const Initial: React.FC = () => {
  const [text, setText] = useState("");
  const fullText =
    "Welcome to Dan Edwards' terminal portfolio website. Type 'help' to see available commands.";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="font-mono">
      <p className="text-green-400">
        {text}
        <span className="animate-blink">_</span>
      </p>
    </div>
  );
};

export default Initial;
