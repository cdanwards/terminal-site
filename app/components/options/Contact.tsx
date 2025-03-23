import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 mt-4">
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "var(--terminal-green)" }}
      >
        Contact Me
      </h2>

      <a
        className="contact-link"
        href="mailto:cdaniel.edwards@gmail.com"
        target="_blank"
      >
        <span className="icon">📧</span>
        cdaniel.edwards@gmail.com
      </a>

      <a
        className="contact-link"
        href="https://bsky.app/profile/cdanwards.bsky.social"
        target="_blank"
      >
        <span className="icon">🔵</span>
        BlueSky: @cdanwards.bsky.social
      </a>

      <a
        className="contact-link"
        href="https://github.com/cdanwards"
        target="_blank"
      >
        <span className="icon">📂</span>
        GitHub: @cdanwards
      </a>

      <a
        className="contact-link"
        href="https://www.linkedin.com/in/cdanwards/"
        target="_blank"
      >
        <span className="icon">👔</span>
        LinkedIn: cdanwards
      </a>
    </div>
  );
};

export default Contact;
