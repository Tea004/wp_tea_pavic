function runScript() {
    // Korisnikov unos broja pomoću prompt
    const userInput = prompt("Unesite broj:");

    // Provjera da li je unos validan broj
    if (!isNaN(userInput) && userInput.trim() !== "") {
        const number = Number(userInput); // Pretvaranje unosa u broj

        // Provjera da li je broj veći od 10
        if (number > 10) {
            alert("Broj je veći od 10");
        } else {
            alert("Broj nije veći od 10");
        }
    } else {
        alert("Molimo unesite važeći broj.");
    }
}
