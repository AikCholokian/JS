

export function createLi(prod, category) {
    const li = document.createElement("li");
    li.textContent = `${prod.toLowerCase()}, ${category}`;
    return li;
}