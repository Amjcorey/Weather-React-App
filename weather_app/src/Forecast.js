import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function getForecast() {

   const [temperature, setTemperature] = useState(null);
 //   const [humidity, setHumidity] = useState(null);
//  const [wind, setWind] = useState(null);
    const [city, setCity] = useState("");
  //  const [description, setDescription] = useState(null);
  //  const [icon, setIcon] = useState(null);
    
    
    
    function displayWeather(response) {
       setTemperature(Math.round(response.data.main.temp));

    }
   
    function handleSubmit(event) {
      event.preventDefault();
     // alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
     // have to have access to city, make api call, update weather UI   
        let apiKey = "70de72ce25d0801c193edd1d17ced422";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        
        axios.get(apiUrl).then(displayWeather);     
    }

     function displayCity(event) {
        setCity(event.target.value);
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    onChange={displayCity}
                />

                <input
                    type="button" value="Search" className="btn btn-primary"
                />
            </form>

            <div>

            </div>
        </div>
    );
   
}