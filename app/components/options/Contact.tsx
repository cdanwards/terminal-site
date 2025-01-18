import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <a className="pb-6" href="mailto:cdaniel.edwards@gmail.com">
        Drop Me A Line.
      </a>
      <a className="pb-6" href="https://bsky.app/profile/cdanwards.bsky.social">
        Find Me On BlueSky
      </a>
      <a className="pb-6" href="https://github.com/cdanwards">
        Go Look At My GitHub!
      </a>
    </div>
  );
};

export default Contact;
