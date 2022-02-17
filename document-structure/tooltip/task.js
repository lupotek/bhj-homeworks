const strings = Array.from(document.getElementsByClassName("has-tooltip"))

strings.forEach((item) => {
    item.insertAdjacentHTML('afterEnd', `<div class='tooltip'>${item.title}</div>`)
    item.addEventListener('click', (evt) => {
        const tooltip = item.nextElementSibling
        const coordinates = item.getBoundingClientRect();
    tooltip.style.left = coordinates.left + 'px';
    tooltip.style.top = coordinates.bottom + 7 + 'px';
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            evt.preventDefault()
        } else {
            Array.from(document.querySelectorAll(".tooltip_active")).forEach((elem) => elem.classList.remove("tooltip_active"))
            tooltip.classList.add('tooltip_active');
            evt.preventDefault();
           }
    })
})