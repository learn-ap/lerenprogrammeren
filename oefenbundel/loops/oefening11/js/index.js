//eerst je problemen opsplitsen:
// eerst wat je wil doen is een nummer vragen aan de gebruiker
// als je een getal invult dan zet je eigenlijk een limiet
// dus de actie word uitgevoerd, tot het niet verder dan de limiet dat je ingegeven heb




let beginNr = 0;
let conditieGetal = Number(prompt("geef een getal?"));
//test
let optelNr = 1;
//test


for (let i = beginNr; i <= conditieGetal; i++) {
    let nieuweBeginNr = beginNr + optelNr;
    document.write(`${nieuweBeginNr}, `);
//hier ga je de vorige var veranderen, zodat de loop begint met nieuwe cijfers
    beginNr=optelNr;
    optelNr=nieuweBeginNr;



}



