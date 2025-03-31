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



let activeTime = 0; // Track time spent actively on the page
let lastActiveTime = Date.now();
const delayTime = 15 * 60 * 1000; // 10 minutes

// Function to update active time
function updateActiveTime() {
    if (!document.hidden) {
        activeTime += Date.now() - lastActiveTime;
    }
    lastActiveTime = Date.now();
}

// Check every second if the user has reached the required time
const checkTime = setInterval(() => {
    updateActiveTime();
    if (activeTime >= delayTime) {
        clearInterval(checkTime); // Stop checking
        activateEasterEgg();
    }
}, 1000);

// Detect when user switches tabs or returns
document.addEventListener("visibilitychange", updateActiveTime);

// Easter Egg function
function activateEasterEgg() {
    alert("ORB ORB ORB ORB, ORB ORB ORB ORB ORB Gratuluji nasel jso easterEgg!");
    // You can replace this with animations, sounds, or secret messages
}