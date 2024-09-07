import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bihar",
        feelsLike: 32.71,
        humidity: 83,
        temp: 28.05,
        tempMin: 28.05,
        tempMax: 28.05,
        weather: "mist",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return(
        <div className="WeatherApp">
            <h2>Weather App By Delta</h2>
            {/* <WeatherApp/>   */}
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );  
}
