const menuLinks = Array.from(document.querySelectorAll('.menu__link'))


menuLinks.forEach (menuLink => {
    const menuSub = menuLink.closest('.menu__item').querySelector('.menu_sub')
    menuLink.onclick = () => {
        if (menuSub != null) {
            menuSub.classList.toggle('menu_active')
            return false
    }
}
})