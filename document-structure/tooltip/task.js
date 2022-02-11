let tooltip = document.createElement("div")
tooltip.classList.add("tooltip")
const stringsForTooltips = Array.from(document.querySelectorAll(".has-tooltip"))

for (let string of stringsForTooltips) {
    string.addEventListener("click", (evt) => {
    string.appendChild(tooltip)
    tooltip.innerText = evt.target.title
    tooltip.classList.add("tooltip_active")
    evt.preventDefault()
    })
}


