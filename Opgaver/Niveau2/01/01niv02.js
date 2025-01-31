

const buttons = document.querySelectorAll("button");

function changeColor(event) {

    buttons.forEach(btn => btn.style.backgroundColor = "#eee");     // Nulstil alle knapper til grå


    event.target.style.backgroundColor = "#ADD8E6";         // Gør den klikkede knap blå
}

buttons.forEach(button => button.addEventListener("click", changeColor));       // Tilføj event listener til alle knapper

/*
//udgave gennemgået på klassen:

const buttons = document.querySelectorAll("button");

function handleClick(clickedElement){
        buttons.forEach(function(button){
            button.style.backgroundColor = "#eee";
        })
     clickedElement.style.backgroundColor = "#ADD8E6"
    }

    buttons.forEach(function(button) {
        button.addEventListener("click", function(){
             handleClick(button)
        })
})

/// 
*/

/* FORKLARING TIL FUND AF RESULTAT:

FORSØGTE / NÅEDE HERTIL UDEN ÆGTE HJÆLP, kun lidt til at rette syntaksen:

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(function(button) {
    button.addEventListener("click", changeBtnColor)
    function changeBtnColor() {
        button.style.backgroundColor = "#ADD8E6" 
    }

})

///////

*/
//Derefer hjælp fra ChatGpt som laver en løsning med anonyme funktioner i anonyme funktioner,
// som var kompliceret at overskue.Forstod efter lidt grublen,
// men spørger så om der ikke er en simplere måde at skrive koden til samme funktionalitet,
// som er endt på endelige resultat, som jeg synes er tættere på min oprindelige egne kode-forsøg.

/*
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(function (button) {
    button.addEventListener("click", function () {   // Nulstil ALLE knapper til grå (sker kun ved klik)

        buttons.forEach(function (btn) {
            btn.style.backgroundColor = "#eee";
        });


        button.style.backgroundColor = "#ADD8E6";       // Sæt baggrundsfarven på den klikkede knap til blå
    });
});

*/