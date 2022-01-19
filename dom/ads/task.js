const changeText = function() {
    const activeRotatorCase = document.querySelector('.rotator__case_active')
    activeRotatorCase.classList.remove('rotator__case_active')
    if (activeRotatorCase.nextElementSibling !== null) {
    activeRotatorCase.nextElementSibling.classList.add('rotator__case_active')
} else {
   document.querySelector('.rotator__case').classList.add('rotator__case_active')
}
}

setInterval(changeText, 1000)

