let btn = document.querySelector('.btn')
let elem = document.querySelector(".elem");

btn.addEventListener("mouseenter", function () {
  elem.classList.toggle("active");
});

