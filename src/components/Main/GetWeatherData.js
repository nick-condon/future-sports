import React, { useState } from "react";

export function GetWeatherData() {
    const api = '329639843a10be0a6a87dcbb4d10b2a9';
    const city = 'Melbourne';
    const countryCode = 'AU';
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${api}&units=metric`;

    // const [apiData, setApiData] = useState(null);
    var apiData = [];

    // Using fetch to get data
    fetch(base)
        .then(response => { response.json() })
        .then(data => apiData[data]);
    //   temperature = data.main.temp;
    //   const place = data.name;
    //   const { description, icon } = data.weather[0];
    //   const { sunrise, sunset } = data.sys;

    //   const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    //   const fahrenheit = (temp * 9) / 5 + 32;

    //   // Converting Epoch(Unix) time to GMT
    //   const sunriseGMT = new Date(sunrise * 1000);
    //   const sunsetGMT = new Date(sunset * 1000);
    console.log(apiData);
    return apiData
};


export default GetWeatherData