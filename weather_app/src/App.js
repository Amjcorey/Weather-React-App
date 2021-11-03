import React from "react";
import './App.css';
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        </header>
        <main >
          
            <Forecast city="Seattle" />
           
        </main>
      <footer>
        Coded by Amanda Corey and is
        <a href="https://github.com/Amjcorey/weather-react-app" target="_blank">
          open-sourced
        </a>
        on GitHub
      </footer>
      
    </div>
  );
}


