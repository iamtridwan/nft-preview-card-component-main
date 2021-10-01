// select dom value
let inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  inputs.forEach((input) => {
    let prev = input.previousElementSibling;
    let next = input.nextElementSibling;
    if (input.value == "") {
      prev.style.display = "block";
      next.style.display = "block";
    } else {
      input.value = "";
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    let current = e.currentTarget;
    let prev = e.currentTarget.previousElementSibling;
    let next = e.currentTarget.nextElementSibling;
    current.style.border = "1.5px solid hsl(249, 10%, 26%)";
    prev.style.display = "none";
    next.style.display = "none";
  });
});
