let zeichenArray
function passwortPruefen() {
    function passwordPruefen() {
        let eingabe = document.getElementById("tf").value

        zeichenArray = eingabe.split("")
        console.log(zeichenArray)

    }


    function laengePruefen() {
        if (zeichenArray.length > 9) {
            console.log("noice")
        }

    }
}