import renderBtn from "./render.js";
import { decision } from "./gameLogic.js";

let scoreText = document.querySelector("header h1");
const btn = document.querySelector(".btn button");
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

// blank to fill
let blank = document.querySelector(".comps-pick");
const play = document.querySelector(".play_again");

// choices to for computer to choice from
const choices = ["scissors", "paper", "rock", "lizard", "spock"];

// determine the button clicked to aviod repeat rendering
const pageClicked = document
  .querySelector("article")
  .getAttribute("data-button");

// computers decision
const page = (pageName) => {
  const rem_choices = choices.filter((choice) => choice !== pageName);
  const randomNum = Math.floor(Math.random() * rem_choices.length);
  let compsPick = rem_choices[randomNum];
  return compsPick;
};
// get current score
let currentScore = parseInt(sessionStorage.getItem("score"));
scoreText.textContent = currentScore;
// rendering computers decision
setTimeout(() => {
  let comp = page(pageClicked);
  blank.innerHTML = renderBtn(comp);
  const [remark, score] = decision(pageClicked, comp);
  currentScore = currentScore + score;
  scoreText.textContent = currentScore;
  sessionStorage.setItem("score", currentScore);
  play.style.display = "flex";
  let backBtn = document.querySelector(".play_again button");
  let h1 = document.querySelector(".play_again h1");
  h1.innerHTML = remark;
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}, 800);
