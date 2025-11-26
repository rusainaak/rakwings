console.log("JS is connected!");

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

document.addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("message");

    if (!name.value || !email.value || !msg.value) {
        alert("Please fill all fields");
        e.preventDefault();
    }
});

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const product = btn.getAttribute("data-product");
        localStorage.setItem("selectedProduct", product);
        alert(product + " added to checkout!");
    });
});