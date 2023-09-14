// //Eerst moet ik een ster hebben dus een veriable is nodig
//
// let ster="*";
//
// // hier zeg ik dat maximum 5 kan ingevuld worden
// for (let i=1;i<=5;i++){
//     let sterInput = prompt("Geef aan hoeveel sterren je wil ", i);
//     sterOutput = ster + sterInput;
// }
// document.write(sterOutput);

//Eerst moet ik een ster hebben dus een veriable is nodig
let ster="*";
// Een string waarin de ster komt
let resultaat=""
// hier zeg ik dat maximum 5 mag uitgevoerd worden
for (let i=1;i<=5;i++){
    resultaat = resultaat + ster;

    document.write(resultaat+"<br>");
}
