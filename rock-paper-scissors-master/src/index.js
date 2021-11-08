// import { score } from "./gameLogic.js";

let scoreText = document.querySelector("header h1");
// create initial start values for score

if (sessionStorage.length <= 1) {
  sessionStorage.setItem("score", 0);
} else {
  scoreText.textContent = sessionStorage.getItem("score");
}

// showing and hiding modal for game rule
const btn = document.querySelector("button");
const closeBtn = document.getElementById("close");
btn.addEventListener("click", () => {
  document.body.classList.add("show-modal");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("show-modal");
});
