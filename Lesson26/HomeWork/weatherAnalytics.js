
export function findUserBigTemp(users){
  const userBigTemperature = users.reduce((acc, user) =>
    acc.temp < user.temp ? user : acc,
  );
  return userBigTemperature;  
}
