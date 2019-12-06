import React, { useState } from "react";
import Display from "./Display";

// export const addBattingCount = currentCount => {
//     return currentCount + 1;
// };

const Dashboard = () => {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);

  const addBattingCount = currentCount => {
    return currentCount + 1;
  };

  function ballNew() {
    setBall(addBattingCount(ball));
    if (ball === 3) {
      return setBall(0), setStrike(0);
    }
  }

  function strikeNew() {
    setStrike(addBattingCount(strike));
    if (strike === 2) {
      return setBall(0), setStrike(0);
    }
  }

  function foulNew() {
    setStrike(addBattingCount(strike));
    if (strike === 2) {
      return setStrike(2);
    }
  }

  function hitNew() {
    setHit(addBattingCount(hit));
    return setBall(0), setStrike(0);
  }

  return (
    <div>
      <div className="batter-count-container">
        <h1>Batter Count</h1>
        <Display ball={ball} strike={strike} />

        <button className="button-ball" onClick={ballNew}>
          Ball
        </button>

        <button className="button-strike" onClick={strikeNew}>
          Strike
        </button>

        <button className="button-hit" onClick={hitNew}>
          Hit
        </button>

        <button className="button-foul" onClick={foulNew}>
          Foul Ball
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
