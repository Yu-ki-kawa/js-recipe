const inputElement = document.getElementById("text")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("button")

let list = []

if (localStorage.list) {
  list = JSON.parse(localStorage.list)
}

for (const text of list) {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  container.append(card)
}

addButton.onclick = function() {
  console.log("a")
  const text = inputElement.value
  const card = document.createElement("div")
  card.textContent = text
  container.append(card)
  inputElement.value = ""

  list.push(text)
  localStorage.list = JSON.stringify(list)
}
