
function skjulElementViaCssSelector(cssSelector) {
    // Find elementet med den givne CSS-selektor // I stedet for bestemt selector bruger vi parametret cssSelector
    const element = document.querySelector(cssSelector);

    // Hvis elementet blev fundet, skjules det (curly brackets ikke nødvendige ved kun en condition)
    if (element) {
        element.style.display = "none";
    }
}

skjulElementViaCssSelector (".headline2");
skjulElementViaCssSelector (".headline3");




// MIT START FORSØG; SOM JEG GODT VIDST IKKE VAR RIGTIGT MEN KUNNE IKKE TÆNKE MIG TIL LØSNINGEN,
// Min hjerne forstod ikke først det med "cssSelector" som parameter.

/*
const elementer = document.querySelectorAll(".headline3", ".headline2", "#my-button");

function skjulElementViaCssSelector {
elementer.style.display = "none";
}

*/





// Ekstraopgave - tjek video for fejl / overblik

/* function skjulElementViaCssSelector(cssSelector) {
    // Find elementet med den givne CSS-selektor // I stedet for bestemt selector bruger vi parametret cssSelector
    const element = document.querySelector(cssSelector);

    // Hvis elementet blev fundet, skjules det (curly brackets ikke nødvendige ved kun en condition)
   skjulElement(element)
    }

function skjulElement (element) {
    if (element !== null)
        element.style.display = "none";
}
 */