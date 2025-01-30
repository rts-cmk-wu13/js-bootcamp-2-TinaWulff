

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".products"); // Hent alle produkter
    const totalPriceElement = document.querySelector(".product__price__total span"); // Totalpris element

    products.forEach(product => {
        const substractButton = product.querySelector(".substract");   // Minus-knap
        const addButton = product.querySelector(".add");               // Plus-knap
        const quantityNumber = product.querySelector(".quantity");     // Antal produkter
        const priceElement = product.querySelector(".product__price span"); // Priselement
        const basePrice = parseFloat(priceElement.textContent);        // Hent startpris fra HTML //parseFloat bruges til at konvertere til flydende punkt tal, og bevarer decimaler.(se også parseInt længere nede)

        // Event listener for minus-knap
        substractButton.addEventListener("click", () => setAmount(-1));

        // Event listener for plus-knap
        addButton.addEventListener("click", () => setAmount(1));

        function setAmount(change) {
            let quantity = parseInt(quantityNumber.textContent) + change;   // parseInt() bruges til at konvertere en streng (string) til et heltal (integer)

            if (quantity < 1) quantity = 1; // Undgå at gå under 1

            quantityNumber.textContent = quantity; // Opdater antal
            priceElement.textContent = (basePrice * quantity).toFixed(2); // Opdater pris //toFixed(2) for at sikre, at priserne altid vises med to decimaler

            updateTotalPrice(); // 🔥 Opdater totalprisen
        }
    });

    function updateTotalPrice() {
        // Hent alle produktpriser og udregn total
        const total = Array.from(document.querySelectorAll(".product__price span"))
            .map(price => Number(price.textContent)) // Number() er den funktion, der omdanner teksten til et tal, mens .map() sørger for, at denne funktion bliver kørt på hvert element i arrayet.
            .reduce((sum, price) => sum + price, 0); // Summer priserne //.reduce() er en metode, der bruges til at "reducere" (sammenlægge) et array til én enkelt værdi ved at anvende en funktion, som "akkumulerer" et resultat gennem hvert element i arrayet.

        totalPriceElement.textContent = total.toFixed(2) + " kr"; // Opdater totalpris , toFixed(2) for at sikre, at priserne altid vises med to decimaler
    }

    updateTotalPrice(); // 🔥 Opdater totalpris ved load
});
