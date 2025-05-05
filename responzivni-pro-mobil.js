(function () {
    function getDevice() {
        const uzivatel = navigator.userAgent;
        let device = "neznamy uzivatel";

        if (/iPhone/.test(uzivatel)) {
            // Jednodušší detekce pro iPhone
            const iOSVersionMatch = uzivatel.match(/OS (\d+)_/);
            if (iOSVersionMatch) {
                const iOSVersion = parseInt(iOSVersionMatch[1]);
                if (iOSVersion >= 14) {
                    device = "Apple iPhone 12 or newer";
                } else if (iOSVersion >= 13) {
                    device = "Apple iPhone 11";
                } else if (iOSVersion >= 12) {
                    device = "Apple iPhone XR/XS";
                } else {
                    device = "Older iPhone Model";
                }
            } else {
                device = "Apple iPhone";
            }
        } else if (/Android/.test(uzivatel)) {
            // Jednodušší detekce pro Android
            let match = uzivatel.match(/\((.*?)\)/);
            if (match) {
                device = `Android Device (${match[1]})`;
            } else {
                device = "Android Device";
            }
        } else if (/Mac/.test(uzivatel)) {
            device = "Apple Mac";
        } else if (/Windows/.test(uzivatel)) {
            device = "Windows PC";
        } else if (/CrOS/.test(uzivatel)) {
            device = "Chrome OS";
        } else if (/Linux/.test(uzivatel) && !/Android/.test(uzivatel)) {
            device = "Linux PC"; 
        }
        return device;
    }

    const device = getDevice();

    // Před přesměrováním přidáme malé zpoždění pro mobilní zařízení
    if (device.includes("Windows") || device.includes("Mac") || device.includes("Chrome") || device.includes("Linux")) {
        // Použijeme setTimeout pro zpoždění přesměrování
        setTimeout(() => {
            // Získej aktuální URL
            let currentPage = window.location.pathname;
            let correctPage = currentPage.replace("-mobil.html", ".html");

            // Pokud se URL liší, přesměruj
            if (currentPage !== correctPage) {
                console.log("current page: ", currentPage);
                console.log("redirect to: ", correctPage);
                window.location.href = correctPage;
            }
        }, 100); // 100ms zpoždění pro lepší výkon
    }

    // Pro debugging, můžete si zobrazit výstup do konzole
    console.log("Detected Device:", device);
})();
