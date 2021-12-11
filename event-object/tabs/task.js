const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = Array.from(document.querySelectorAll('.tab__content'))

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (evt) {
        let activeTab = document.querySelector('.tab_active')
        let activeContent = document.querySelector('.tab__content_active')
        evt.target.classList.add('tab_active')
        activeTab.classList.remove('tab_active')
        activeContent.classList.remove('tab__content_active')
        contents[i].classList.add('tab__content_active')
    })
}
