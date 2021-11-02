import React from "react";
import './App.css';
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        </header>
        <main >
          
            <Forecast />
           
        </main>
        <footer>Page creat by Amanda Corey</footer>
      
    </div>
  );
}

export default App;
