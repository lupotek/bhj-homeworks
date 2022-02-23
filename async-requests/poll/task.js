let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", function() { 
    if (xhr.readyState === xhr.DONE) {
        document.getElementById("poll__title").textContent = JSON.parse(xhr.responseText).data.title
        const answers = JSON.parse(xhr.responseText).data.answers
        for (let answer of answers) {
            document.getElementById("poll__answers").insertAdjacentHTML("beforeend", `<button class="poll__answer">${answer}</button>`)
        }
        const buttons = Array.from(document.querySelectorAll(".poll__answer"))
        for (let button of buttons) {
            button.addEventListener("click", () => alert("Спасибо, ваш голос засчитан!"))
        }
    }
})
