import axios from "axios";
import React, { useEffect, useState } from "react";
import './css/style.css'
import Navbar from "./Navbar";


let Weather = () => {
    const [city, setCitydata] = useState(null)
    const [input, setInput] = useState("Karachi")
    const [clas, setCLas] = useState(null)
    const [click, setClick] = useState(false);
    // const cityName = useRef();
    let ss;

    useEffect(() => {
if(input == null){
    setInput("Karachi")
}    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=419679b5c559c6e730e0c5568386be2f&units=metric`)
            .then(res => {
                const data = res.data
                // console.log(data);
                setCitydata(data)
                //   alert(input)

                if (data.weather[0].main === "Clear") {
                    console.log("Clear");
                    setCLas("clear")
                } else if (data.weather[0].main === "Clouds") {
                    setCLas("clouds")
                } else if (data.weather[0].main === "Thunderstorm") {
                    console.log("Thunderstorm")
                    setCLas("Thunderstorm")

                } else if (data.weather[0].main === "Haze" || data.weather[0].main === "Smoke") {
                    setCLas("haze")
                }else if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
                    setCLas("Rain")
                }
                 else {
                    setCLas("normal")
                };
            }).catch((error) => { alert("Country not found") })
            

    }, [click])
    return (
      
      <div id='big'>

                {
                    (city !== null) ?
                    <div className={`box ${clas}`}>


                        <div className="info">
                            <div className="inputData">
                                <input type="text"
                                    className="inputField"
                                    //   ref={cityName}
                                    onChange={(event) => {
                                        ss = event.target.value
                                    }}
                                />
                               <button className='bt' onClick={() => {
                                    setClick(!click)
                                    setInput(ss)
                                    console.log(ss);
                                }}>Submit</button>
                            </div>
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{input}
                            </h2>
                            <h1 className='name'>
                                {city.main.temp}°C
                            </h1>
                            <h1>{city.weather[0].main}</h1>
                            <h3>Min temp {city.main.temp_min}°C || Max temp {city.main.temp_max}°C</h3>
              </div>
              <div>
              <ul className="non">
            <li>Country : {city.sys.country}</li>
            <li>Feels Like : {city.main.feels_like}°C</li>
            <li>Humidity : {city.main.humidity}g/kg</li>
            <li>Pressure : {city.main.pressure} Pa</li>
            <li>Wind Direction : {city.wind.deg} Degree</li>
            <li>Wind Speed : {city.wind.speed}m/s</li>
        </ul>
              </div>
            </div>

                        :
                        <p>Loading...</p>
                }


</div>
    )
}

export default Weather;