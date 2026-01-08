import React from "react";

const Cat: React.FC = () => {
  return (
    <pre className="font-mono text-xs sm:text-sm leading-tight">
      {`  /\\_/\\
 ( o.o )
  > ^ <  meow!`}
    </pre>
  );
};

export default Cat;
