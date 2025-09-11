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
        <a href="https://burthgulash.github.io/Chynicky_LARP/Navrat-mocneho/Navrat-mocneho.html" onclick="toggleMenu()">Návrat mocného</a>
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Ozveny%20stinu2/Ozvěny%20stínů%202.html" onclick="toggleMenu()">Ozvěny Stínů 2</a>
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Ozveny%20stinu/Ozvěny%20stínů.html" onclick="toggleMenu()">Ozvěny stínů</a>
        <a href="https://burthgulash.github.io/Chynicky_LARP/Odehrane%20LARPy/Hranicni%20tvrz/Hranicni%20tvrz.html" onclick="toggleMenu()">Hraniční tvrz</a>
    </div>
</div>
<button class="darkXlight" id="button-theme-switch">🌗</button>
`