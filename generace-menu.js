// tady ten script je jen kvuli tomu ze jsme lini vydz urpavit side menu na vsech strankach tak to upravime jen jednou
document.querySelector("#sideMenu").innerHTML = `
<div class="menu-item-s-submenu">
    <a href="https://burthgulash.github.io/Chynicky_LARP/larphlavni/index.html" class="ma-submenu" onclick="toggleMenu()">Kalendář akcí</a>
    <div class="submenu">
        <a href="https://burthgulash.github.io/Chynicky_LARP/Pres.hrebeny/Pres.hrebeny.html" onclick="toggleMenu()">Přes hřebeny</a>
    </div>
</div>
<a href="https://burthgulash.github.io/Chynicky_LARP/O%20nas/O%20nás.html" onclick="toggleMenu()">O nás</a>
<a href="https://burthgulash.github.io/Chynicky_LARP/pribehy/pribehy.html" onclick="toggleMenu()">Příběhy</a>

<div class="menu-item-s-submenu">
    <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Odehrane%20LARPy.html">Odehrané LARPy</a> 
    <div class="submenu">
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Navrat-mocneho/Navrat-mocneho.html" onclick="toggleMenu()">Návrat mocného</a>
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Ozveny%20stinu2/Ozvěny%20stínů%202.html" onclick="toggleMenu()">Ozvěny Stínů 2</a>
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Ozveny%20stinu/Ozvěny%20stínů.html" onclick="toggleMenu()">Ozvěny stínů</a>
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Hranicni%20tvrz/Hranicni%20tvrz.html" onclick="toggleMenu()">Hraniční tvrz</a>
    </div>
</div>
<button class="darkXlight" id="button-theme-switch">🌗</button>
`
window.dispatchEvent(new Event("side-menu"))

const arrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
    <path
        d="M480 224C492.9 224 504.6 231.8 509.6 243.8C514.6 255.8 511.8 269.5 502.7 278.7L342.7 438.7C330.2 451.2 309.9 451.2 297.4 438.7L137.4 278.7C128.2 269.5 125.5 255.8 130.5 243.8C135.5 231.8 147.1 224 160 224L480 224z" />
</svg>
`