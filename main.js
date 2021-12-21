const card = document.querySelector(".card");
const changeSide = document.querySelectorAll(".changeSide");
const fa = document.querySelectorAll(".fa-share");

for (let i = 0; i < changeSide.length; i++) {
  changeSide[i].addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

fa[1].addEventListener("click", () => {
  fa[1].classList.toggle("mudar");
});

const $url = document.URL;
const popup = document.getElementById("myPopup");

const copyToClipBoard = () => {
  navigator.clipboard.writeText($url);
  popup.classList.toggle("show");
};
