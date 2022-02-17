const button = document.getElementById("tasks__add")
const tasksList = document.getElementById("tasks__list")
const taskInput = document.getElementById("task__input")

button.addEventListener("click", (evt) => {
    const inputedText = taskInput.value.trim()
    if (inputedText !== "") {
        tasksList.insertAdjacentHTML("afterbegin",`<div class='task'><div class='task__title'>${inputedText}</div><a href='#' class='task__remove'>&times;</a></div>`)
        taskInput.value = ""  
    }
    const tasksRemove = Array.from(document.querySelectorAll(".task__remove"))
    for (let taskRemove of tasksRemove) {
        taskRemove.addEventListener("click", () => {
            taskRemove.closest(".task").remove()})
    }
    evt.preventDefault() 
})


