import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Bạn đã bấm {count} lần</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}

export default ClickCounter;
