import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const toggleStartStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  React.useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h1>Saniyəölçən</h1>
      <p>{time} saniyə</p>
      <button onClick={toggleStartStop}>
        {running ? "Dayandır" : "Başla"}
      </button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  );
};

export default Stopwatch;
