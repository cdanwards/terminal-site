import React from "react";

const Help: React.FC = () => {
  return (
    <div>
      <div>
        <h3>Available Commands:</h3>
      </div>
      <ul style={$listStyles}>
        <li>about</li>
        <li>projects</li>
        <li>resume</li>
        <li>contact</li>
        <li>skills</li>
        <li>help</li>
        <li>surprise</li>
        <li>clear</li>
      </ul>
    </div>
  );
};

const $listStyles = {
  listStyle: "disc inside",
};

export default Help;
