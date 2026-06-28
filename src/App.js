import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h2>Live Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default App;
