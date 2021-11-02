import React from "react";
import "./Forecast.css";

export default function getForecast() {
    return (
        <div className="container">
            <form>
                <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                />

                <input
                type="button" value="Search" className="btn-primary" />
            </form>

        </div>
    );
}