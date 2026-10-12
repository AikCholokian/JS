function renderUsers(users, container) {
    users.forEach(user => {
        const p = document.createElement('p');
        p.innerText = `${user.name}: - (${user.age})`;
        container.append(p);
    })
}
export default renderUsers;

