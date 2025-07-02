import React, { useState } from "react";
import ClickCounter from "./ClickCounter";
import Timer from "./Timer";
import FocusInput from "./FocusInput";
import ThemeDemo from "./ThemeDemo";
import CounterReducer from "./CounterReducer";

function App() {
  const [active, setActive] = useState("ClickCounter");

  const renderComponent = () => {
    switch (active) {
      case "ClickCounter": return <ClickCounter />;
      case "Timer": return <Timer />;
      case "FocusInput": return <FocusInput />;
      case "ThemeDemo": return <ThemeDemo />;
      case "CounterReducer": return <CounterReducer />;
      default: return null;
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎯 Hook Practice App</h1>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setActive("ClickCounter")}>useState</button>
        <button onClick={() => setActive("Timer")}>useEffect</button>
        <button onClick={() => setActive("FocusInput")}>useRef</button>
        <button onClick={() => setActive("ThemeDemo")}>useContext</button>
        <button onClick={() => setActive("CounterReducer")}>useReducer</button>
      </div>
      <hr />
      {renderComponent()}
    </div>
  );
}

export default App;
