const dead = document.getElementById ('dead')
const lost = document.getElementById ('lost')
getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent++;
            if (+dead.textContent === 10) {
                alert ('Победа!')
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (+lost.textContent === 5) {
                alert ('Game over')
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}