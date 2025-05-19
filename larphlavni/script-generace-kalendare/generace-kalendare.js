import {data} from "https://burthgulash.github.io/Chynicky_LARP/script-generace-kalendare/generace-kalendare.js"

let htmlRendered = ""

data.forEach((element, index) => {
    
/*let datumLongerThan1;
// zjisti na array jestli je 1 dlouhy nebo vic
if (data.datum.lenght < 1 ) {
    datumLongerThan1 = true
}*/
let htmlRenderedOrganizatori = "";
data.organizatori.forEach(element => {
    htmlRenderedOrganizatori+=`
    <p class="organizatori-text">${element}</p>
    `
});
`
<div class="ozveny-stinu2-navrat">
    <div class="ozveny2-popis">
        <a href="${data.link}">
            <button class="ozveny-stinu-tlacitko">${data.nazev}</button>
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
            ${htmlRenderedOrganizatori}
        </div>
    </div>
    <div class="ozveny2-img">
        <img style="width: 100%; justify-content: center; margin: 5px 0 5px 0;" src="${data.obrazek}">
    </div>
</div>
`

document.querySelector(".kalendar-akci2").innerHTML = htmlRendered
});