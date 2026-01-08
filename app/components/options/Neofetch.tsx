import React from "react";

const Neofetch: React.FC = () => {
  return (
    <pre className="font-mono text-xs leading-tight">
      {`       .--.        visitor@portfolio
      |o_o |       ----------------
      |:_/ |       OS: Web Browser
     //   \\ \\      Host: danedwards.dev
    (|     | )     Kernel: Next.js 14
   /'\\_   _/\`\\     Shell: React 18
   \\___)=(___/     Terminal: Custom`}
    </pre>
  );
};

export default Neofetch;
