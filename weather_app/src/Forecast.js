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

    function handleResponse(response) {
     // event.preventDefault();
      alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
    }

    let apiKey = "70de72ce25d0801c193edd1d17ced422";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
        
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="container">
            <form className="form" >
                <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    
                />

                <input
                    type="button" value="Search" className="btn-primary"
                />
            </form>

        </div>
    );

   
}