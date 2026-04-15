// script.js

// Reveal animation on scroll (smooth iPhone-like feel)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".text-section, .image-section").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// Mouse move parallax (premium subtle effect)
const card = document.querySelector(".card");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
    `;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});


// Button ripple effect
const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.offsetLeft - diameter / 2}px`;
    circle.style.top = `${e.clientY - this.offsetTop - diameter / 2}px`;
    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }

    this.appendChild(circle);
});


// Add smooth entrance delay
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
