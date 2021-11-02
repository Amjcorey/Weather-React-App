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
          
            <Forecast city="Seattle" />
           
        </main>
        <footer>Page created by Amanda Corey</footer>
      
    </div>
  );
}

export default App;
