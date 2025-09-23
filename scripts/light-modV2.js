import { getImageFormat } from "./utilities/imgformat.js";

const iframe = document.getElementById("theme-sync");
const btn = document.getElementById("button-theme-switch");
const navBar = document.querySelector("nav")
const iconContainer = document.getElementById("icon-img-container")

applyTheme("dark")// Default theme
// 1. Ask iframe for theme on load
iframe.onload = () => {
    iframe.contentWindow.postMessage("get-theme", "https://burthgulash.github.io");
};

// 2. Receive the theme and apply it
window.addEventListener("message", (event) => {
    console.log("Mesage", event)
    if (event.origin !== "https://burthgulash.github.io") return;
    if (event.data?.type === "theme") {
        applyTheme(event.data.value);
    }
});

// 3. User changes theme
btn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    // Save to iframe
    iframe.contentWindow.postMessage({ type: "set-theme", value: newTheme }, "https://burthgulash.github.io");
    applyTheme(newTheme);
});

function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    const akceTlacitko = document.querySelectorAll(".akce-tlacitko");
    const akceContainer = document.querySelectorAll(".akce-container")

    // info card clases
    const info = document.querySelectorAll(".info2")
    const info21 = document.querySelectorAll(".info2-1")
    const info22 = document.querySelectorAll(".info2-2")
    if (theme === "dark") {
        document.body.classList.toggle("dark");
        const root = document.querySelector(":root");

        const bgClr = getComputedStyle(root).getPropertyValue("--backgroud-color-dark").trim();
        const bgAccentClr = getComputedStyle(root).getPropertyValue("--backgroud-color-dark-accent").trim();
        const textClr = getComputedStyle(root).getPropertyValue("--text-color-dark").trim();
        const navImg = getComputedStyle(root).getPropertyValue("--nav-img-dark").trim();
        root.style.setProperty("--bg-clr",bgClr)
        root.style.setProperty("-bg-accent-clr",bgAccentClr)
        root.style.setProperty("--text-clr",textClr)
        root.style.setProperty("--nav-img",navImg)

        // Change the background image of the navBar
        navBar.style.setProperty("background-image", "url(https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Nav.panel/temný%20les%203.jpg")
        updateIcons();
    } else if (theme === "light") {
        document.body.classList.toggle("light");

        const root = document.querySelector(":root");

        const bgClr = getComputedStyle(root).getPropertyValue("--backgroud-color-light").trim();
        const bgAccentClr = getComputedStyle(root).getPropertyValue("--backgroud-color-light-accent").trim();
        const textClr = getComputedStyle(root).getPropertyValue("--text-color-light").trim();
        const navImg = getComputedStyle(root).getPropertyValue("--nav-img-light").trim();
        root.style.setProperty("--bg-clr",bgClr)
        root.style.setProperty("-bg-accent-clr",bgAccentClr)
        root.style.setProperty("--text-clr",textClr)
        root.style.setProperty("--nav-img",navImg)
        updateIcons();
    }
}

function updateIcons() {
    const isLight = document.querySelector("body").classList.contains("light")
    const hamburgerSwords = document.querySelector(".menu-btn")
    if (isLight) {
        hamburgerSwords.src = "https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Nav.panel/tri%20mece%20final%20final-light.png"
    } else {
        hamburgerSwords.src = "https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Nav.panel/tri%20mece%20final%20final.png"
    }
    document.querySelectorAll("#icon-img").forEach(image => {
        const imgFormat = getImageFormat(image.src) // Get the image format is correct
        const name = image.dataset.name;
        // docasny fix protoye nemuzu prejmenovat img
        if (name === "warior-transparent") {
            if (isLight) {
                image.src = `https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Ikony-img/${name}-light.${imgFormat}`;
            } else {
                image.src = `https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Ikony-img/warrior-transparent.${imgFormat}`;
                return
            }
        }
        if (isLight) {
            image.src = `https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Ikony-img/${name}-light.${imgFormat}`;
        }
        else {
            image.src = `https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Ikony-img/${name}.${imgFormat}`;
        }
    });
}


