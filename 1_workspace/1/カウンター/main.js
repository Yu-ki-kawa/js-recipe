const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multiple2Button = document.getElementById("2times-button")
let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

minusButton.onclick = function() {
  count += -1
  display.textContent = count
}

multiple2Button.onclick = function() {
  count = count * 2
  display.textContent = count
}
