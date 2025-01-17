import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <a href="mailto:cdaniel.edwards@gmail.com">Drop Me A Line.</a>
      <a href="https://bsky.app/profile/cdanwards.bsky.social">
        Find Me On BlueSky
      </a>
      <a href="https://github.com/cdanwards">Go Look At My GitHub!</a>
    </div>
  );
};

export default Contact;
