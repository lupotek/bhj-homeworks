const cookieImage = document.getElementById ('cookie')
const clickerCounter = document.getElementById('clicker__counter')

cookieImage.onclick = () => {
    clickerCounter.textContent ++
    if (cookieImage.width === 200) {
        cookieImage.width = 250;
        cookieImage.height = 200;
    } else if (cookieImage.width === 250) {
        cookieImage.width = 200;
        cookieImage.height = 128;
    }
}