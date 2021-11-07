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

// const bounce = [
//   {
//     opacity: "0",
//   },
//   {
//     opacity: "1",
//   },
// ];

// const timming = {
//   duration: "1000",
//   easing: "ease",
// };

// closeBtn.animate(bounce, timming);
