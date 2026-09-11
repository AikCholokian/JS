// https://jsonplaceholder.typicode.com/posts
 
//https://jsonplaceholder.typicode.com/users

async function returnUser(id) {
    const respons = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userData = await respons.json();
    return userData;
}

const userId = 1;
const userData = await returnUser(userId);
console.log(userData);

const userDataJson = JSON.stringify(userData, null, 2);
console.log(userDataJson);

const names = [];
for (let i = 1; i <= 10; i++) {
    const userData = await returnUser(i);
    names.push({
        id: userData.id,
        name: userData.name,
        latitude: userData.address.geo.lat,
        longitude: userData.address.geo.lng,

    })
}
console.log(names);

