//eerst je problemen opsplitsen:
// eerst wat je wil doen is een nummer vragen aan de gebruiker
// als je een getal invult dan zet je eigenlijk een limiet
// dus de actie word uitgevoerd, tot het niet verder dan de limiet dat je ingegeven heb




let beginNr = 1;
let conditieGetal = Number(prompt("geef een getal?"));

for(let i = 1; i<=conditieGetal ;i++){
        let som = beginNr*i;
        document.write(`${beginNr}x${i}=${som} `);
    }



