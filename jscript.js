function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const menuButton = document.querySelector(".menu");

    sideMenu.classList.toggle("side-menu-open");
    menuButton.classList.toggle("menu-open");
}