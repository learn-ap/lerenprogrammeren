//eerst je problemen opsplitsen:
// eerst wat je wil doen is een nummer vragen aan de gebruiker
// als je een getal invult dan zet je eigenlijk een limiet
// dus de actie word uitgevoerd, tot het niet verder dan de limiet dat je ingegeven heb


let beginNr = 0;
//let conditieGetal = Number(prompt("geef een getal?"));
//test
let optelNr = 1;
//test

//for (let i = beginNr; i <= conditieGetal; i++) {
for (let i = beginNr; i <= 7; i++) {
    if (i<1){ //als het begin kleiner is dan in, in dit geval start i=0, dan voert hij het uit
        document.write(`${beginNr}, ${optelNr}, `);
    }
    let nieuweBeginNr = beginNr + optelNr;
    if (i > 0) { //als het groter is dan nul, vult hij ', ' eerst voordat hij de 2de loop uitvoerd
        document.write(`, `);
    }
//hier ga je de vorige var veranderen, zodat de loop begint met nieuwe cijfers
    document.write(`${nieuweBeginNr}`);
    beginNr = optelNr;
    optelNr = nieuweBeginNr;
}



