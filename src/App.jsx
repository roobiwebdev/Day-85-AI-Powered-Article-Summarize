import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Toggle from "./components/Toggle";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
