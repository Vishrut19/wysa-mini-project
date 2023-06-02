import React from "react";

import styles from "./Home.module.css";
import Input from "../UI/Input/Input";
import { blueOwl } from "../../constants/images";

const Home = ({ showNext }) => {
  const navigationHandler = async (name) => {
    const response = await fetch(
      "https://wysa-onboarding-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify({
          nickname: name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // Pass ID of newly created user to the next element
    showNext(data.name);
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Hey! Welcome to <span>WYSA</span>
      </p>
      <p className={styles.body}>
        Our conversations is private and anonymous. Just choose a nickname and
        we're good to go.
      </p>

      <div className={styles.customInput}>
        <img src={blueOwl} alt="Logo" className={styles.logo} />
        <Input showNext={showNext} navigate={navigationHandler} />
      </div>
    </div>
  );
};

export default Home;
