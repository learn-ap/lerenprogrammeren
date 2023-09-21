//om de letters in te steken
let kleineLetters = [];
let hoofdLetters = [];
//gebruik asci tabel inplaats van functies

let asciiNr = 97;
let test = String.fromCharCode(asciiNr);

//er zijn 26 letters maar de array telt van nul dus max 25
for(let x =0;x <=25;x++){
    kleineLetters.push(String.fromCharCode(asciiNr)); //op het ascii tabel staat a=op=97
    hoofdLetters.push(String.fromCharCode(asciiNr-32)) //de hoofdletter staat 32 plaatsen voor
    asciiNr++; //dit telt het op en gaat zo naar de volgende in de ascii lijst
}
document.write(kleineLetters,'    ',hoofdLetters);