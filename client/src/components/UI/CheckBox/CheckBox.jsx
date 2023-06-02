import React, { useState } from 'react';

import styles from './CheckBox.module.css';
import { checkMark } from '../../../constants/images';

const CheckBox = ({ content, color, addGoal, removeGoal }) => {
  const [isChecked, setIsChecked] = useState(false);

  const selectHandler = () => {
    if (!isChecked) {
      addGoal(content);
      setIsChecked(true);
    } else if (isChecked) {
      removeGoal(content);
      setIsChecked(false);
    }
  };

  return (
    <div
      className={styles.checkbox}
      style={{ backgroundColor: color }}
      onClick={selectHandler}
    >
      <span>{content}</span>

      {isChecked && (
        <img src={checkMark} alt="arrow" className={styles.arrow} />
      )}
    </div>
  );
};

export default CheckBox;
