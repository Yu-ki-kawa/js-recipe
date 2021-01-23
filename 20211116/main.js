const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display = document.getElementById("display")

button1.onclick = function() {
  display.textContent = "不正解"
}
button2.onclick = function() {
  display.textContent = "正解"
}
button3.onclick = function() {
  display.textContent = "不正解"
}

const yuki = {
  name: "Yuki",
  age: 21,
  birthday: "1999/12/21",
  hobby: ["吹奏楽", "ゲーム", "猫の世話"],
  sayHello: function() {
    console.log("こんにちは")
  },
}
