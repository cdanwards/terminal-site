import React from "react";
import styles from "./surprise.module.scss";

const Surprise: React.FC = () => {
  return (
    <div className={styles.pyro}>
      <div className={styles.before}></div>
      <div className={styles.after}></div>
    </div>
  );
};

export default Surprise;
