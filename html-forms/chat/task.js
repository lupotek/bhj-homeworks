const chatWidget = document.querySelector(".chat-widget")
const newMessage = document.getElementById("chat-widget__input")
const botMessages = [
  "Вы не купили ни одного товара, чтобы со мной так разговаривать!",
  "Кто тут?",
  "Где ваша совесть?",
  "К сожалению, все операторы заняты. Не пишите нам больше.",
  "Добрый день! До свидания!",
  "Мы ничего не будем вам продавать!"
]

function randomBotMessages() {
  let indexMessage = Math.floor(Math.random() * botMessages.length);
  return botMessages[indexMessage];
}
let messages = document.querySelector('.chat-widget__messages')

chatActivate = () => {
    chatWidget.classList.add("chat-widget_active")
}
chatWidget.addEventListener("click", chatActivate)

document.addEventListener("keydown", (e) => {
let clientText = newMessage.value.trim()
if (e.key === "Enter" && clientText !== "") {
  messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time"> ${new Date().getHours()} ${new Date().getMinutes()} </div>
        <div class="message__text">${clientText}</div>
    </div>
`
  newMessage.value = ""

  messages.innerHTML += `
    <div class="message">
    <div class="message__time"> ${new Date().getHours()} ${new Date().getMinutes()}</div>
    <div class="message__text">${randomBotMessages()}</div>
    </div>`
  }
})

