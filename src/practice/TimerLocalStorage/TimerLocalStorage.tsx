import { useEffect, useRef, useState } from "react";

const TimerLocalStorage = () => {
  const [time, setTime] = useState([10, 0]);
  const intervalRef = useRef<any>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((time) => {
        if (time[1] === 0) return [time[0] - 1, 60];
        else return [time[0], time[1] - 1];
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      {time[0]}:{time[1]}
    </div>
  );
};

export default TimerLocalStorage;
