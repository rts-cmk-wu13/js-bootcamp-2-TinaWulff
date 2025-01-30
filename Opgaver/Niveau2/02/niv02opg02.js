

/*
function divide (a, b) {
    return a / b;
}

let resultat = divide(4,3);

console.log(resultat)

//
*/






/*

const totalPriceElement = document.querySelector(".product__price__total span");

const productsPrices = Array.from(document.querySelectorAll(".product__price span"));



function totalPrice(productsPrices){
    return sum(productsPrices);
    
    }

*/

/*
function totalPrice(pricea, priceb, pricec){
return pricea + priceb + pricec;
}
*/

const totalPriceElement = document.querySelector(".product__price__total span");

// Hent alle produktpriser som et array af spans
const productsPrices = Array.from(document.querySelectorAll(".product__price span"));

function totalPrice(productsPrices) {
    // Konverter HTML-elementer til tal og læg dem sammen
    return productsPrices
        .map(price => Number(price.textContent)) // Hent tekstindholdet og konverter til tal
        .reduce((sum, price) => sum + price, 0); // Summér alle priser
}

// Opdater den totale pris i HTML
totalPriceElement.textContent = totalPrice(productsPrices) + " kr";
