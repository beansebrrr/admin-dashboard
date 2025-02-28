const cardGrid = document.querySelector(".card-grid");
const projectCard = document.querySelector(".card");
const trendingCard = document.querySelector("#trending>.side-card")
const userProfile = document.querySelector(".profile");

for (let i = 0; i < 9; i++) {
  cardGrid.appendChild(projectCard.cloneNode(true))

  i % 3 === 0 ? trendingCard.appendChild(userProfile.cloneNode(true)) : {}
}