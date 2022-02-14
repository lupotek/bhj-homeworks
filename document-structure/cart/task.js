const products = document.getElementsByClassName("product")
const cart = document.querySelector(".cart__products")
const cartProductsList = document.getElementsByClassName("cart__product")

for (let product of products) {
    const valueButton = product.querySelector(".product__quantity-value")
    const decButton = product.querySelector(".product__quantity-control_dec")
    const incButton = product.querySelector(".product__quantity-control_inc")
    const addButton = product.querySelector(".product__add")
    const productId = product.dataset.id;
    const productImg = product.querySelector(".product__image").src;

    decButton.addEventListener("click", () => {
        const orderedAmount = Number(valueButton.textContent)
        if(orderedAmount > 1) {
            valueButton.innerHTML = orderedAmount - 1
        }
    })

    incButton.addEventListener("click", () => {
        let orderedAmount = Number(valueButton.textContent)
            valueButton.innerHTML = orderedAmount + 1
    })

    addButton.addEventListener("click", () => {
        const checkId = (Array.from(cartProductsList)).find((item) => (item.dataset.id === productId))

        if (!checkId) {
            const productInCard = document.createElement("div")
            productInCard.insertAdjacentHTML("afterbegin", `<div class="cart__product" data-id=${productId}>
            <img class="cart__product-image" src=${productImg}>
            <div class="cart__product-count">${valueButton.textContent}</div>
        </div>`)
            cart.appendChild(productInCard)
        } else {
            checkId.querySelector(".cart__product-count").textContent =
            Number(checkId.querySelector(".cart__product-count").textContent) +
            Number(valueButton.textContent)
        }
        
    })
}
