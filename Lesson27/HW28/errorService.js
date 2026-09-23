const modal = document.getElementById("errorModal");
const errorMess = document.getElementById("errorMessage");
const closeBtn = document.getElementById("closeModal");

closeBtn.addEventListener("click", (click) => {
  modal.close();
});

export function errorModal(message = "Тут ошибка") {
  errorMess.textContent = message;
  modal.showModal();
}
