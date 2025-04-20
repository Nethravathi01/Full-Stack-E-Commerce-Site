document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error("Error loading products:", error))
});
function displayProducts(products) {
    let productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" width="100" alt="${product.name}">
            <p>${product.name} - ₹${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Item added to cart!");
}
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}
updateCartCount();
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});