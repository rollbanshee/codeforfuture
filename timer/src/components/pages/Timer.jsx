import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60); // Default 60 saniyə
  const [running, setRunning] = useState(false);

  const increaseTime = () => {
    if (!running) setTime((prev) => prev + 10);
  };

  const decreaseTime = () => {
    if (!running && time > 10) setTime((prev) => prev - 10);
  };

  const toggleStartPause = () => {
    setRunning(!running);
  };

  React.useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      alert("Taymer bitdi!");
      setRunning(false);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  return (
    <div>
      <h1>Taymer</h1>
      <p>{time} saniyə</p>
      {!running && (
        <>
          <button onClick={increaseTime}>Vaxtı artır (+10 saniyə)</button>
          <button onClick={decreaseTime}>Vaxtı azalt (-10 saniyə)</button>
        </>
      )}
      <button onClick={toggleStartPause}>
        {running ? "Pauza" : "Başla"}
      </button>
    </div>
  );
};

export default Timer;
