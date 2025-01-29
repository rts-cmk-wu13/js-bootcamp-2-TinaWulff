
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(function(button) {
    button.addEventListener("click", function() {   // Nulstil ALLE knapper til grå (sker kun ved klik)
        buttons.forEach(function(btn) {
            btn.style.backgroundColor = "#eee";
        });

        
        button.style.backgroundColor = "#ADD8E6";       // Sæt baggrundsfarven på den klikkede knap til blå
    });
});




/*


NÅEDE HERTIL UDEN ÆGTE HJÆLP, kun lidt til at rette syntaksen:

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(function(button) {
    button.addEventListener("click", changeBtnColor)
    function changeBtnColor() {
        button.style.backgroundColor = "#ADD8E6" 
    }

})

*/