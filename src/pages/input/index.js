import React from "react";
import ReactDOM from "react-dom";
import { Map } from "@esri/react-arcgis";

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
