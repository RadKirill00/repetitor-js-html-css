let p = document.querySelector("#elem");
let btn = document.querySelector("#button");
let btn2 = document.querySelector("#button2");

function func1() {
  p.textContent = Number(p.textContent) + 1
}

function func2() {
  p.textContent = Number(p.textContent) - 1;
}

btn.addEventListener("click", func1);
btn2.addEventListener('click', func2)