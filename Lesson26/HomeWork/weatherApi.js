
export async function getTemperaturFoUsers(usersDataToExport) {
  const usersDataTemperature = [];  
  for (let user of usersDataToExport) {
    const lat = user.lat;
    const lng = user.lng;
    const respons = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`,
    );
    const dataObj = await respons.json();
    usersDataTemperature.push({
        name: user.name,
        phone: user.phone,
        temp: dataObj.current_weather.temperature,
    });
  };
  return usersDataTemperature;
}


