const button = document.querySelector('.dropdown__value')
const list = document.querySelector('.dropdown__list')
const items = Array.from(document.querySelectorAll('.dropdown__item'))

const openList = function() {
    list.classList.add('dropdown__list_active')
}

const closeList = function() {
    list.classList.remove('dropdown__list_active')
}

button.addEventListener('click', openList)

const changeTextButton = function(evt) {
   button.textContent = evt.target.textContent
   evt.preventDefault()
}

items.forEach(item => {
    item.addEventListener('click', changeTextButton)
    item.addEventListener('click', closeList)
})

