

let som= 0;
//je vraagt zelf hoeveel nummers je wil ingeven
let hoeveelGetallen = Number(prompt("Hoeveel getallen?")); // "+" of ","


// tip "Number(prompt( verandert de gewone prompt-string in een prompt-nummer
for(let i=1;i<=hoeveelGetallen;i++) {
    //hierin komen de ingegeven nummers
    let getal = Number(prompt("Geef een getal ", i)); // "+" of ","
    som = som + getal;
}
//zorg ervoor de uitkomst buiten de vorige actie uitgevoord word, check haakjes sluiten.
document.write("Totale som van ", hoeveelGetallen, "getallen is", som);