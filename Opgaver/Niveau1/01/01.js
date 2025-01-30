document.addEventListener("DOMContentLoaded", function() {

const button = document.querySelector("#my-button");

let colorBlue = "#ADD8E6";
let colorGrey = "#eee";


let isSelected = false;


button.addEventListener("click", ChangeButtonColor);

function ChangeButtonColor() {
    if (isSelected) {
        button.style.backgroundColor = colorGrey;
    } else {
        button.style.backgroundColor = colorBlue;
    }
    isSelected = !isSelected;
};

})


//// SE VIDEO IGEN FOR AT FORSTÅ PG FÅ DE HER TIL AT VIRKE:
/*
button.addEventListener("click", function(){
    isSelected = !isSelected;
})

});
*/


//// ANDEN VERSION (GENNEMGÅEDE VERSION) ////
/*
const button = document.querySelector("#my-button");

button.addEventListener("click", function(){
button.classList.toggle("click")
})
*/





// HERUNDER KOMMENTARER/NOTER TIL EGEN MEMORY

/* Bør ikke kalde mine farver for farve-navne men i stedet 
fx 1, 2 eller andet neutralt, da det er en varibel,
hvor jeg kan ændre farvekoden/designet, men her var det lige for nemhedens skyld*/


/*
FORKLARING AF opdatering: isColorBlue = !isColorBlue;  :

Skift værdien af isColorBlue:
isColor1 bliver derefter ændret med linjen isColorBlue = !isColorBlue;.
Hvis isColorBlue tidligere var true, bliver den nu false. Det betyder, at næste gang der klikkes, vil vi skifte til den anden farve.
Hvis isColorBlue var false, vil det nu blive true, og vi skifter tilbage til colorBlue.

Et praktisk eksempel:

Første gang:
isColorBlue er true (knappen er farvet lyseblå).
Når knappen klikkes, skifter farven til grå (farve colorGrey).
Vi sætter isColorBlue = !isColorBlue; → isColorBlue bliver nu false.

Anden gang:
isColor1 er nu false (knappen er farvet grå).
Når knappen klikkes igen, skifter farven tilbage til lyseblå (farve colorBlue).
Vi sætter isColorBlue = !isColorBlue; → isColorBlue bliver nu true.
*/