
function skjulElementViaCssSelector(cssSelector) {
    // Find elementet med den givne CSS-selektor
    const element = document.querySelector(cssSelector);

    // Hvis elementet blev fundet, skjules det
    if (element) {
        element.style.display = "none";
    }
}

skjulElementViaCssSelector (".headline2");
skjulElementViaCssSelector (".headline3");




// MIT START FORSØG; SOM JEG GODT VIDST IKKE VAR RIGTIGT MEN KUNNE IKKE TÆNKE MIG TIL LØSNINGEN,
// Jeg vidste ikke og forstod ikke at man kunne bruge selve "cssSelector",
// som parameter når man vælger elementer ved hjælp af document.querySelector.

/*
const elementer = document.querySelectorAll(".headline3", ".headline2", "#my-button");

function skjulElementViaCssSelector {
elementer.style.display = "none";
}

*/