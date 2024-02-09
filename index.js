let elems = document.querySelectorAll("ul li");

for (let elem of elems) {
  elem.addEventListener('click', function func() {
    if (this.textContent < 10) {
      this.textContent = Number(this.textContent) + 1;
    } else {
      this.removeEventListener("click", func);
    }
  })
}

