const figure = document.getElementById("figure")

figure.onmouseover = function() {
  figure.classList.add("rounded")
}
figure.onclick = function() {
  figure.classList.remove("rounded", "square")
  figure.classList.add("triangle")
}
