const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1

  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

const character = {
  name: "太郎",
  mother: {
    name: "洋子",
  },
  hobbies: ["読書", "音楽鑑賞"],
}

const mutiply = function(a, b) {
  return a * b
}

for (let i = 2; i < 11; i = i + 2) {
  console.log(i)
}

if (true) {
  console.log("こんにちは")
}

if (false) {
  console.log("こんばんは")
} else {
  console.log("こんにちは")
}
