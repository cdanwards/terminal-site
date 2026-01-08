import React from "react";

const Cowsay: React.FC = () => {
  return (
    <pre className="font-mono text-xs sm:text-sm leading-tight">
      {` _______________________
< Welcome to my portfolio! >
 -----------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
    </pre>
  );
};

export default Cowsay;
