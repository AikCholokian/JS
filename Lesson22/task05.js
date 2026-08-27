import axios from "axios";

async function getWeather(lat, lon) {
  return await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
  );
}
async function main(lat, lon) {
  const wetherData = await getWeather(lat, lon);
  console.log("Широта: " + lat + "\nДолгота: " + lon);
  console.log(wetherData.data);
  console.log("Скорость ветра: " + wetherData.data.current_weather.windspeed);
  console.log("Температура: " + wetherData.data.current_weather.temperature);
}

main(-90, 0);
