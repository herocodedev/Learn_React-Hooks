import { useEffect, useState } from "react";
import PropTypes from "prop-types";
function formatDate(date) {
  if (!date) return;
  // 034 slice(-2) => 34
  // 09 slice(-2)  => 09
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // hh:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      // clean up
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
