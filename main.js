const card = document.querySelector(".card");
const changeSide = document.querySelectorAll(".changeSide");

for (let i = 0; i < changeSide.length; i++) {
  changeSide[i].addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

const $url = document.URL;
const popup = document.getElementById("myPopup");

const copyToClipBoard = () => {
  navigator.clipboard.writeText($url);
  popup.classList.toggle("show");
};
