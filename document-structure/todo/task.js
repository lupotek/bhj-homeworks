const button = document.getElementById("tasks__add")
const taskList = document.getElementById("tasks__list")

button.addEventListener("click", () => {
    let inputedText = document.getElementById("task__input").value
    if (inputedText != "") {
        taskList.insertAdjacentHTML("afterbegin","<div class='task'><div class='task__title'></div><a href='#' class='task__remove'>&times;</a></div>")
        const taskTitle = taskList.querySelector(".task__title")
        taskTitle.insertAdjacentText("afterbegin", inputedText)
        document.querySelector(".task__remove").addEventListener("click", (evt) => {
            evt.target.closest('.task').remove()
        })
    }
    document.getElementById("task__input").value = ""
})