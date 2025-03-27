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

function easterEgg (){
    alert("orb orb orb orb, orb orb orb orb orb! Gratuluji, nasel jsi easter egg")
}

const delayTime = 1000 * 60 * 20
// nastavi cas ukazani
const startTime = Date.now()

const checkTime = setInterval(() => {
    const elapsedTime = Date.now - startTime
    if (elapsedTime >= delayTime){
        clearInterval();
        easterEgg();
    };
})