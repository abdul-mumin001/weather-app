import React from "react";
import { UseWeatherAPPContext } from "../../Context/Context";

export default function HumidityComponents() {
    let {state: {current, city}} = UseWeatherAPPContext();
    // console.log(current, city);
    const uvLevel=(uvLevel)=>{
        if(uvLevel <=2) return 'Low'
        if(uvLevel <=5) return 'Medium'
        if(uvLevel <=7) return 'High'
        if(uvLevel >7) return 'Very High'
    }
  return (
   
    <>
    {
        current ? <div className="humidityWrap">
        <div className="humidityData">
            <div className="title"> UV Index</div>
            <div className="value">{Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))})</div>
        </div>

        <div className="humidityData">
            <div className="title">Humidity</div>
            <div className="value">{current.humidity} %</div>
        </div>

        <div className="humidityData">
            <div className="title">Wind</div>
            <div className="value">{Math.round(current.wind_speed)} km/h</div>
        </div>
        <div className="humidityData">
            <div className="title">{city.city} - {city.admin_name} - Population</div>
            <div className="value">{parseFloat(city.population).toLocaleString('en')}</div>
        </div>
    </div> : ''
   
    }
    </>
   
  )
}
