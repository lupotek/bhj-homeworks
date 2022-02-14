const button = document.getElementById("tasks__add")
const tasksList = document.getElementById("tasks__list")
let taskInput = document.getElementById("task__input")

button.addEventListener("click", (evt) => {
    const inputedText = taskInput.value.trim() 
    if (inputedText !== "") {
        //evt.preventDefault()
        tasksList.insertAdjacentHTML("afterbegin",`<div class='task'><div class='task__title'>${inputedText}</div><a href='#' class='task__remove'>&times;</a></div>`)
        taskInput.value = ""
        evt.preventDefault()
        document.querySelector(".task__remove").addEventListener("click", () => {
           evt.target.closest(".task").remove()
        })
    } else {
        evt.preventDefault()
    }
})