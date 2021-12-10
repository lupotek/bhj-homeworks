const modalMain = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')
const closeElements = Array.from(document.querySelectorAll('.modal__close'))

closeElements.forEach (element => {
    element.onclick = () => {
        element.closest('.modal').classList.remove('modal_active')
    }
})

modalMain.classList.add('modal_active')
document.querySelector('.show-success').onclick = () => {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active')
}
