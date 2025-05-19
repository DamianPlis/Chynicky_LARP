import {data} from "https://burthgulash.github.io/Chynicky_LARP/script-generace-kalendare/generace-kalendare.js"

document.querySelector(".kalendar-akci2").innerHTML = `
<div class="ozveny-stinu2-navrat">
    <div class="ozveny2-popis">
        <a href="../Navrat-mocneho/Navrat-mocneho.html">
            <button class="ozveny-stinu-tlacitko">Návrat mocného</button>
        </a>
        <div class="datumy">
            <div style="margin: 0 0 10px 0;">
                <p class="datum-right">Datum :</p>
            </div>
            <div class="moznost">
                <p class="datum-left">14.6.2025 - </p>
                <p class="datum-left3">15.6.2025</p>
            </div>
        </div>
        <div class="organizatori">
            <p class="organizatori-text">Organizátoři :</p>
            <p class="organizatori-text">Kvido Redl</p>
            <p class="organizatori-text" s>Hugo Redl</p>
            <p class="organizatori-text" s>Kristian Páca</p>
        </div>
    </div>
    <div class="ozveny2-img">
        <img style="width: 100%; justify-content: center; margin: 5px 0 5px 0;" src="img/Výstřižek.PNG">
    </div>
</div>
<!---->
<!---->
<div class="ozveny-stinu2-coming-soon">
    <div class="ozveny2-popis">
        <a href="#">
            <button class="ozveny-stinu-tlacitko">Již brzy</button>
        </a>
        <div class="datumy">
            <p class="datum-right">Datum :</p>
            <p class="datum-left">Již brzy</p>
            <p class="datum-left"></p>
        </div>
        <div class="organizatori-div">
            <p class="organizatori-text">Organizátoři :</p>
            <p class="organizatori-text">Již brzy</p>
            <p class="organizatori-text"></p>
            <p class="organizatori-text"></p>
        </div>
    </div>
    <div class="ozveny2-img">
        <img style=" width: 100%; justify-content: center; margin: 5px 0 5px 0;"
            src="img/questionmark2.2.png">
    </div>
</div>`