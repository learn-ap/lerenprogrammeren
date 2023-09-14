// "const" een nummer dat niet verandert
const geefGetal = Number(prompt("Geef een getal"));
let faculteit = 1;
let faculteitString = geefGetal;

for(let i= geefGetal;i>=1;i--) {
    faculteit = faculteit * i;
    //als geefGetal anders is dan voort hij het volgende "if" uit
    if(i !== geefGetal){
        faculteitString += "x"+i;
    }
}
// dit is de ouder manier wanneer je text tussen wilt vullen een plus moest zetten op specifiece plaatsen
// document.write(faculteitString + "=" + faculteit);

document.write(`${faculteitString} = ${faculteit}`);

//!== (betekend: verschillend/anders