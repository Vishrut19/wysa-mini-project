import React, { useState } from 'react';

import styles from './Goals.module.css';
import CheckBox from '../UI/CheckBox/CheckBox';

import { goals as userGoals } from '../../constants/data';
import { downArrow } from '../../constants/images';

const Goals = ({ showNext, userId }) => {
  const [goals, setGoals] = useState([]);

  const addGoal = (currentGoal) => {
    setGoals([...goals, currentGoal]);
  };

  const removeGoal = (currentGoal) => {
    let newGoals = [...goals];
    newGoals = newGoals.filter((goal) => goal !== currentGoal);

    setGoals(newGoals);
  };

  const navigationHandler = async () => {
    // Get current user from DB
    const response = await fetch(
      'https://wysa-onboarding-default-rtdb.firebaseio.com/users.json/'
    );

    const users = await response.json();

    let currentUser = users[userId];
    currentUser[goals] = goals;

    users[userId] = currentUser;

    // Update current user
    const res = await fetch(
      'https://wysa-onboarding-default-rtdb.firebaseio.com/users.json',
      {
        method: 'PUT',
        body: JSON.stringify(users),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.ok) {
      showNext();
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Let's say in a few weeks, you're sleeping well. What would change?
      </p>
      <p className={styles.body}>
        Select all the changes you would like to see
      </p>

      <div className={styles.select}>
        {userGoals.map((goal) => (
          <CheckBox
            content={goal.content}
            color={goal.color}
            addGoal={addGoal}
            removeGoal={removeGoal}
            key={goal.content}
          />
        ))}
      </div>

      {goals.length > 0 && (
        <button
          type="button"
          className={styles.button}
          onClick={navigationHandler}
        >
          <img src={downArrow} alt="Arrow Down" />
        </button>
      )}
    </div>
  );
};

export default Goals;
