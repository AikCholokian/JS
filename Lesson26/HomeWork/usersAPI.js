import axios from "axios";

export async function getUsers() {
  const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const usersData = users.data;
  const usersDataNew = usersData.map((user) => {
    return {
      name: user.name,
      phone: user.phone,
      lat: user.address.geo.lat,
      lng: user.address.geo.lng,
    };
  });
  return usersDataNew;
}



