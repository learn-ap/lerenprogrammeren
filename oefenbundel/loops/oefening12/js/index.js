let getal1 = Number(prompt('Geef een getal'));
let getal2 = Number(prompt('Geef een 2de getal'));

for (let i = 1; i <= getal2; i++) //die kleiner dan getal mss veranderen?
{
    som1 = getal1%i;
    som2 = getal2%i;


    if (som1>0) {
        som1 = getal1%i;
        som2 = getal2%i;
    }
}
let ggd = som1 && som2;
document.write(`De grootste GGD van ${getal1} & ${getal2} is ${ggd}`);

// //poging 2
// // //aftel manier
// for (let i = getal1; i >=1; i--)
// {
//     som1 = getal1%i;
//     som2 = getal2%i;
//
//     if (som1>0) {
//         som1 = getal1%i;
//         som2 = getal2%i;
//     }
// }
//     let ggd = som1 && som2;
//     document.write(`De grootste GGD van ${getal1} & ${getal2} is ${ggd}`);



//poging 1
//oude manier

// let getal1 = Number(prompt('Geef een getal'));
// let getal2 = Number(prompt('Geef een 2de getal'));
//
// for (let i = 1; i <= 15; i++)
// {
//     som1 = getal1%i;
//     som2 = getal2%i;
//
//     if (som1>0) {
//         som1 = getal1%i;
//         som2 = getal2%i;
//     }
// }
// let ggd = som1 && som2;
// document.write(`De grootste GGD van ${getal1} & ${getal2} is ${ggd}`);
