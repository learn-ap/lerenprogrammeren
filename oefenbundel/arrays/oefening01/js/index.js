

let teller = 0;
let getal = 0;
var getallenReeks = [];

while(getal >= 0){

    getallenReeks.push(Number(prompt(`Geef getal ${teller+1} in:`)));// ${teller+1} is de auto nummering, teller word van null naar 1, kan ook zonder
    getal = getallenReeks[teller]; // het 0-getal word vervangen met wat in de array is gestoken en op dat moment word de 0-vak nummer opgevraagd

    teller++;
}
// je vraagt het vakje-nr.
hoeveelsteGetal = Number(prompt('Het hoeveelste getal wens je te zien?'));
// deze var hoeveelsteGetal verandert naar het nr  van  het vakje
hoeveelsteGetal = getallenReeks[hoeveelsteGetal-1];// omdat normale mensen van 1 tellen, moeten we min doen zodat ze de juiste vak opvragen
document.write(hoeveelsteGetal);