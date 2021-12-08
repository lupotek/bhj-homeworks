const timer = document.getElementById("timer");

let countDown = () => {
    timer.textContent -= 1;
    if (timer.textContent < 0) {
        alert ('Вы победили в конкурсе!');
        clearInterval (timing);
    }
}

let timing = setInterval (countDown, 1000)

