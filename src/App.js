import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [key, setKey] = useState("Press Key");

  const onKey = (event) => {
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return <div className="App">{key}</div>;
}

export default App;
