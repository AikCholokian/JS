let astronautName='John Doe';
console.log(astronautName);

let astronautAge= 35;
console.log(astronautAge);
let isCommander= true;
console.log(isCommander);
let planet='Mars';
console.log(planet);
let missionDuration= 180; // in days
console.log(missionDuration);
astronautAge += 10; // Increment age by 10 year
console.log('возраст астронавта через 10 лет', astronautAge);
missionDuration += 30; // Increment mission duration by 30 days
console.log('длительность миссии после увеличения на 30 дней', missionDuration);

console.log(`Имя астронавта: ${astronautName}`);
console.log(`планета: ${planet}`);
console.log(`статус командира: ${isCommander}`);
isCommander = false; // Change commander status to false
console.log(`статус командира после изменения: ${isCommander}`);