import { useEffect } from "react"
import { useState } from "react"

const WeatherApp = () => {

    const [weather,setWeather] = useState(null)

    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=902778c34af9b54a30597c040f155b42`)
                .then((response) => response.json())
                .then((data) => setWeather(data))
            })
        }
    },[])
  return (
    <div>
        {weather ? (
            <div>
                <h2>Current weather</h2>
                <p>Temperature : {weather.main.temp}</p>
                <p>Condition : {weather.weather[0].description}</p>
                {console.log(weather)}
            </div>
        ) : (
            <p>Loading.........</p>
        )}
    </div>
  )
}

export default WeatherApp