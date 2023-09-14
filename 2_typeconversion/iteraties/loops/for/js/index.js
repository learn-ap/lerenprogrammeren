//for loop

// for(teller;conditie;manipulatie van de teller){
//     hier komt de uitvoering van code
// }
//3de parameter

// optelling: i=i+1; i+=i; i++
//eerst de eerste plaats iet invullen dan laatste.


// // gewone optelling
// for(let i=1;i<=10;i++){
//     document.write(i);
// }
// // "i+=2" zorgt ervoor dat je per 2 optel
// for(let i=1;i<=10;i+=2) {
//     document.write(i);
// }
//
//     //  ...
//     for(let i=10;i>1;i--) {
//         document.write(i);
//     }

    //vraag je wilt tot 3 optellen dus "i<=3" om een limiet te zetten
    let som= 0;
    for(let i=1;i<=3;i++) {
        let getal = Number(prompt("Geef getal ", i, "in:")); // "+" of ","
        som = som + getal;
    }
        //je zet de resultaat buiten op direct het juiste antwoord te krijgen anders telt hij per rij
        //Let op <br> (voorbeeld:Number(prompt("Geef getal ",i, "in:<br>"));) kan gebruikt worden maar zal niet meer verder gaan!
        document.write(som);