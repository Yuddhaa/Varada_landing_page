// Reserved for future interactions
console.log("Varada Spices loaded");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

let isOpen = false;

function openMenu() {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-[500px]");

    menuIcon.innerHTML = `
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"/>
    `;

    isOpen = true;
}

function closeMenu() {
    mobileMenu.classList.remove("max-h-[500px]");
    mobileMenu.classList.add("max-h-0");

    menuIcon.innerHTML = `
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"/>
    `;

    isOpen = false;
}

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
    if (
        isOpen &&
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        closeMenu();
    }
});

