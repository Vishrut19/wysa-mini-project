import React from "react";
import styles from "./Success.module.css";

const Success = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Thanks for your response. You have score 89% which is a good score. Keep
        It Up!!
      </p>
    </div>
  );
};

export default Success;
