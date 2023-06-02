import React, { useRef, useState } from 'react';
import styles from './Input.module.css';
import { downArrow } from '../../../constants/images';

const Input = ({ navigate }) => {
  const [isValid, setIsValid] = useState(false);
  const nameRef = useRef();

  const changeHandler = (event) => {
    if (event.target.value.length > 0) {
      if (!isValid) setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const clickHandler = () => {
    navigate(nameRef.current.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Choose a nickname..."
        className={styles.input}
        onChange={changeHandler}
        ref={nameRef}
      />

      {isValid && (
        <button type="button" className={styles.button} onClick={clickHandler}>
          <img src={downArrow} alt="Arrow Down" />
        </button>
      )}
    </div>
  );
};

export default Input;
