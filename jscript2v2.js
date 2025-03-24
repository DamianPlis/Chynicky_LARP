const uzivatel = navigator.userAgent;
(function () {
    function TypUzivatele() {
        const uzivatel = navigator.userAgent;
        let device = "neznamy uzivatel";
        if (/iPhone/.test(uzivatel)) {
            const iosVersion = getIOSVersion();
            device = `Apple iPhone (iOS ${iosVersion})`;
        } else if (/Android/.test(uzivatel)) {
            // Jednodušší detekce pro Android
            let match = uzivatel.match(/\((.*?)\)/);
            if (match) {
                device = `Android Device (${match[1]})`;
            } else {
                device = "Android Device";
            }
        } else if (/Macintosh/.test(uzivatel) && !/iPhone/.test(uzivatel) ) {
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

    const device = TypUzivatele();

    // Před přesměrováním přidáme malé zpoždění pro mobilní zařízení
    if (device.includes("iPhone") || device.includes("Android")) {
            // Získej aktuální URL
        let currentPage = window.location.pathname;
        let correctPage = currentPage.replace(".html", "-mobil.html");
            // Pokud se URL liší, přesměruj
        if (currentPage !== correctPage) {
            console.log("current page: ", currentPage);
            console.log("redirect to: ", correctPage);
            window.location.href = correctPage;
            }
         // 100ms zpoždění pro lepší výkon neeeeeplatiiiiii
    }

    // Pro debugging, můžete si zobrazit výstup do konzole
    console.log("Detected Device:", device);
})();

function getIOSVersion() {
    const uzivatel = navigator.userAgent;
    const match2 = uzivatel.match(/OS (\d+)_/); // Find "OS XX_" in userAgent
    return match2 ? parseInt(match[1]) : null; // Extract version as an integer
}