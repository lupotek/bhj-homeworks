const checkboxes = Array.from(document.querySelectorAll(".interest__check"))

for (let checkbox of checkboxes) {
    const parentCheckbox = checkbox.closest(".interest")
    if (parentCheckbox.querySelector(".interests")) {
        checkbox.addEventListener("change", () => {
            const children = Array.from(parentCheckbox.querySelectorAll(".interests .interest__check"))
            if (checkbox.checked) {
                for (let child of children) {
                    child.checked = true
                }
            } else {
                for (let child of children) {
                    child.checked = false
                }
            }
        })
    }
}