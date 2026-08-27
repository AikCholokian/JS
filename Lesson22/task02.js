async function printWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
    const json = await response.json();
    console.log('------------result------------');
    console.log(json);
    console.log('windSpeed:', json.current_weather.windspeed);
    console.log('temperature:', json.current_weather.temperature);
    console.log('get JSON');
    const res = JSON.stringify(json);
    console.log(res);
    const obj = JSON.parse(res);
    console.log(obj);

}

printWeather();

