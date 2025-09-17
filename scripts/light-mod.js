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
        // for each button change the class + change random linear gradient
        akceTlacitko.forEach((button) => {
            button.style.setProperty("background", "linear-gradient(var(--background-color-dark-accent)) padding-box,linear-gradient(-45deg, rgb(66, 66, 66), rgb(110, 110, 110)) border-box")
            button.classList.remove("akce-tlacitko-light");
            button.classList.add("akce-tlacitko-dark");
        });
        // for each akce change the accent color
        akceContainer.forEach(akce => {
            akce.classList.remove("akce-container-light")
        });
        // loop over multiple info card classes
        info.forEach(card => {
            card.classList.remove("info2-light")
        });
        info21.forEach(card => {
            card.classList.remove("info2-1-light")
        });
        info22.forEach(card => {
            card.classList.remove("info2-2-light")
        });
        // Change the background image of the navBar
        navBar.style.setProperty("background-image", "url(https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Nav.panel/temný%20les%203.jpg")
        updateIcons();
    } else if (theme === "light") {
        // for each button change the class + change random linear gradient
        akceTlacitko.forEach(button => {
            button.style.setProperty("background", "linear-gradient(var(--background-color-light-accent)) padding-box,linear-gradient(-45deg, rgb(66, 66, 66), rgb(110, 110, 110)) border-box")
            button.classList.remove("akce-tlacitko-dark");
            button.classList.add("akce-tlacitko-light");
        })
        // for each akce change the accent color
        akceContainer.forEach(akce => {
            akce.classList.add("akce-container-light")
        });
        document.body.classList.toggle("light");
        // loop over multiple info card classes
        info.forEach(card => {
            card.classList.add("info2-light")
        });
        info21.forEach(card => {
            card.classList.add("info2-1-light")
        });
        info22.forEach(card => {
            card.classList.add("info2-2-light")
        });
        // Change the background image of the navBar
        navBar.style.setProperty("background-image", "url(https://burthgulash.github.io/Chynicky_LARP/kvido%20html-img/foto/Nav.panel/IMG_6357.jpg")
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


