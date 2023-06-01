import axios from "axios";
import React, { useState, useEffect } from "react";

function Options(props) {
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setSelected(e.target.innerHTML);
    console.log(e.target.innerHTML);
    axios
      .post("/Answers/submit", e.target.innerHTML)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>{props.questions.problems}</h2>
      <br></br>
      <br></br>
    </div>
  );
}

export default Options;
