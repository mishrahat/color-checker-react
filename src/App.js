import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const colors = ["blue", "black", "orange", "skyblue"];

  return (
    <div className="App">
      Color Checker:
      <div
        style={{
          backgroundColor: color || "black",
          width: "100px",
          height: "100px",
        }}
      ></div>
      <input
        value={color}
        placeholder="Change Color: e.g. Black"
        onChange={(e) => setColor(e.target.value)}
      />
      <p> or choose from here: </p>
      {colors?.map((colorname, index) => (
        <button onClick={() => setColor(colorname)}>{colorname}</button>
      ))}
    </div>
  );
}

export default App;
