import React from "react";

const Display = props => {
  return (
    <div>
      <div>
        <h2>Balls:</h2>
        <div>{props.ball}</div>
      </div>
      <div>
        <h2>Strikes:</h2>
        <div>{props.strike}</div>
      </div>
    </div>
  );
};

export default Display;

// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.
