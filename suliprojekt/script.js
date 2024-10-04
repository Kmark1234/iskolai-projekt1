
let cart = [];

function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    alert(`${productName} has been added to your cart!`);
    console.log(cart);  
}
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 10000);

function removeOverlay(button) {
    const overlay = button.parentElement;
    overlay.style.background = 'transparent';
    button.style.filter = 'grayscale(0%)';
}

function restoreOverlay(button) {
    const overlay = button.parentElement;
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    button.style.filter = 'grayscale(100%)';
}
