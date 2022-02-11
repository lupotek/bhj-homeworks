const quantityButtons = Array.from(document.querySelectorAll(".product__quantity"))
const products = Array.from(document.querySelectorAll(".product"))
const cart = document.querySelector(".cart__products")
const addButtons = Array.from(document.querySelectorAll(".product__add"))
const cartProductsList = Array.from(document.querySelectorAll(".cart__product"))
const addButton = Array.from(document.querySelectorAll(".product__add"))

for (let product of products) {
    const valueButton = product.querySelector(".product__quantity-value")
    const decButton = product.querySelector(".product__quantity-control_dec")
    const incButton = product.querySelector(".product__quantity-control_inc")

    decButton.addEventListener("click", () => {
        let orderedAmount = Number(valueButton.textContent)
        if(orderedAmount > 1) {
            valueButton.innerHTML = orderedAmount - 1
        }
    })

    incButton.addEventListener("click", () => {
        let orderedAmount = Number(valueButton.textContent)
            valueButton.innerHTML = orderedAmount + 1
    })
  
}

for (let addButton of addButtons) {
    const product = addButton.closest(".product")
    addButton.addEventListener("click", addToCart)

    function addToCart (event) {
        const checkId = cartProductsList.findIndex((item) => item.dataset.id == product.dataset.id)

        if (checkId === -1) {
            const productInCard = document.createElement("div")
            productInCard.insertAdjacentHTML("afterbegin", "<div class='cart__product' data-id='1'><img class='cart__product-image' src='image.png'><div class='cart__product-count'>20</div></div>")
            productInCard.dataset.id = event.target.closest(".product").dataset.id
            cart.appendChild(productInCard)
        } else {
            cartProductsList[checkId].querySelector(".cart__product-count").textContent = product.querySelector(".product__quantity-value").textContent;
        }
    } 
}
 

