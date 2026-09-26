

export function createList(prod) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.hidden = true;
    checkbox.checked = true;
    const span = document.createElement("span");
    span.textContent = prod;
    li.append(checkbox, span);
    return li;
}