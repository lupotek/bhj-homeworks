const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", function (evt) {
    const formData = new FormData(form)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.addEventListener("progress", function (evt) {
        progress.value = evt.loaded/evt.total
    })

xhr.send(formData);
evt.preventDefault();
})