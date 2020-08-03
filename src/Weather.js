import React, { useEffect, useState } from "react";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather"
let apiKey = process.env.REACT_APP_WEATHER_KEY
let city = "Toronto, Canada"
/*function getLocation() {
	if (navigator.geolocation) {
		city = navigator.geolocation.getCurrentPosition();
	}
	else {
		"Toronto, Canada";
	}
}*/

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  }, []);

  return (
    <h2>It is currently {weather && Math.round(weather.main.temp)}° in {city}.</h2>
  );
}

export default Weather;