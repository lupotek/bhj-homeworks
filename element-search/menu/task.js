const menuLinks = Array.from(document.querySelectorAll('.menu__link'))
 
menuLinks.forEach (menuLink => {
    menuLink.onclick = () => {
        if (menuLink.closest('.menu__item').querySelector('.menu_sub') != null) {
            menuLink.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active')
            return false
    }
}
})