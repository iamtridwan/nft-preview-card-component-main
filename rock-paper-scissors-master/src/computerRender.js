import renderBtn from "./render.js";

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

// renering computers decision
setTimeout(() => {
  blank.innerHTML = renderBtn(page(pageClicked));
  play.style.display = "flex";
  let backBtn = document.querySelector(".play_again button");
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}, 800);
