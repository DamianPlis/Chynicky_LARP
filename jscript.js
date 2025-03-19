function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const menuButton = document.querySelector(".menu");

    sideMenu.classList.toggle("side-menu-open");
    menuButton.classList.toggle("menu-open");
}

function updatePadding() {
    const nav = document.querySelector("nav");
    const content = document.querySelector("body"); // Adjust selector for your page content
    content.style.paddingTop = `${nav.offsetHeight}px`;
}

// Run on page load & window resize
window.addEventListener("load", updatePadding);
window.addEventListener("resize", updatePadding);