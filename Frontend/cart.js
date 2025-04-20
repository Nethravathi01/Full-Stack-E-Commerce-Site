document.addEventListener("DOMContentLoaded", displayCart);
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}" width="70" alt="${item.name}">
            <p>${item.name} - ₹${item.price}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(div);
        totalPrice += parseFloat(item.price); 
    });  
    totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;
}
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCart(); 
}
function clearCart() {
    localStorage.removeItem("cart"); 
    displayCart(); 
}