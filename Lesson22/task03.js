async function printWeather(lat, lon) {
    console.log(lat, lon);
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${
      lat
    }&longitude=${lon}&current_weather=true`,
  )
    .then((response) => response.json())
    .then((json) => {
      console.log("------------result------------");
      console.log(json);
    })
    .catch((error) => console.log(error));
}

const lat = -90;
const lon = 0;

printWeather(lat, lon);
