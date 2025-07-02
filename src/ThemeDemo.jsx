import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();

function Page() {
  const theme = useContext(ThemeContext);
  const bg = theme === "dark" ? "#333" : "#fff";
  const color = theme === "dark" ? "#fff" : "#000";

  return (
    <div style={{ background: bg, color, padding: 20 }}>
      <h2>Theme hiện tại: {theme}</h2>
    </div>
  );
}

function ThemeDemo() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
        Chuyển Theme
      </button>
      <Page />
    </ThemeContext.Provider>
  );
}

export default ThemeDemo;
