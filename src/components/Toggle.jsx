// Toggle.js
import React from "react";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default Toggle;
