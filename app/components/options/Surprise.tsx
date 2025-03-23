import React, { useState, useEffect } from "react";
import styles from "./surprise.module.scss";

const Surprise: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the surprise after 5 seconds
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!isActive) {
    return (
      <div className="text-center py-6">
        <p>Hope you enjoyed the fireworks! 🎆 🎆 🎆</p>
      </div>
    );
  }

  return (
    <div className={styles.pyro}>
      <div className={styles.before}></div>
      <div className={styles.after}></div>
    </div>
  );
};

export default Surprise;
