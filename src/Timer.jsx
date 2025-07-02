import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(id); // cleanup
  }, []);

  return <h2>Đã trôi qua {seconds} giây</h2>;
}

export default Timer;
