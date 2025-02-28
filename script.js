const cardGrid = document.querySelector(".card-grid");
const projectCard = document.querySelector(".card");

for (let i = 0; i < 12; i++) {
  cardGrid.appendChild(projectCard.cloneNode(true))
}