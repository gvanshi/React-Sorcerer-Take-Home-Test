import React from "react";
import EditorComponent from "./components/EditorComponent";
import "./styles.css";

const App = () => {
  const name = "Vanshika gupta"; // Replace "Your Name" with your actual name
  return (
    <div className="app">
      <h1>Demo Editor by {name}</h1>
      <EditorComponent />
    </div>
  );
};

export default App;
