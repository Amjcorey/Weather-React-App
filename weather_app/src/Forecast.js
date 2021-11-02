import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function getForecast(props) {

 //   const [temperature, setTemperature] = useState(null);
 //   const [humidity, setHumidity] = useState(null);
  //  const [wind, setWind] = useState(null);
  //  const [city, setCity] = useState(null);
  //  const [description, setDescription] = useState(null);
  //  const [icon, setIcon] = useState(null);

    function handleSubmit(event) {
      event.preventDefault();
     // alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
        
        let apiKey = "70de72ce25d0801c193edd1d17ced422";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
        
        axios.get(apiUrl).then(displayWeather);
        
    }


    function displayWeather(response) {
        setTemperature(Math.round(response.data.main.temp));
        setDescription(response.data.weather[0].description);
        setWind(Math.round(response.data.wind.speed));
        setHumidity(response.data.main.humidity);
        setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

    return (
        <div className="container">
            <form className="form" onSubmit="handleSubmit">
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