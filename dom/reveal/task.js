const reveals = document.querySelectorAll('.reveal')

const isInViewport = function () {
    for (const reveal of reveals) {
        const viewportHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            reveal.classList.add('reveal_active');
        } 
        if (elementTop < 0 || elementTop > viewportHeight) {
        reveal.classList.remove('reveal_active');
        }
    }
}
document.addEventListener('scroll', isInViewport);

