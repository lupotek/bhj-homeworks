const sliderItems = Array.from(document.querySelectorAll('.slider__item'))
const leftArrow = document.querySelector('.slider__arrow_prev')
const rightArrow = document.querySelector('.slider__arrow_next')


function activeSearch() {
    if (document.querySelector('.slider__item_active')) {
        return document.querySelector('.slider__item_active')
    }
}

let activeSlideIndex = sliderItems.findIndex(activeSearch)

rightArrow.onclick = () => {
    sliderItems[activeSlideIndex].classList.remove('slider__item_active')
    activeSlideIndex < sliderItems.length-1 ? activeSlideIndex += 1 : activeSlideIndex = 0;
    sliderItems[activeSlideIndex].classList.add('slider__item_active')
}

leftArrow.onclick = () => {
    sliderItems[activeSlideIndex].classList.remove('slider__item_active')
    activeSlideIndex > 0 ? activeSlideIndex  -= 1 : activeSlideIndex = sliderItems.length - 1;
    sliderItems[activeSlideIndex].classList.add('slider__item_active')
}
