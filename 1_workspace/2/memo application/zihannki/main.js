const AddmoneyButton = document.getElementById("add-money")
const Cola = document.getElementById("cola")
const Display = document.getElementById("display")
let kinngaku = 0

AddmoneyButton.onclick = function() {
  kinngaku = kinngaku + 100
  Display.textContent = kinngaku
}
