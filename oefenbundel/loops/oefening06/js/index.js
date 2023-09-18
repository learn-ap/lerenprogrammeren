

let zin = "full stAck developers";
let intro = "Welkom"

document.write(`Hoofdletter: ${zin.toUpperCase()}<br>`);
document.write(`Hoofdletter: ${zin.toLowerCase()}<br>`);
document.write(`${intro} ${zin}<br>`);
document.write(`Samenvoegen ${intro.concat(' ',zin).toUpperCase()}<br>`);
document.write(`charAt:${zin.charAt(6)}`); //hij telt van nul, dus 0,1,2 en niet 1.2.3...
document.write(`CharCodeAt:${zin.charCodeAt(6)}<br>`);
document.write(`split:${zin.split()}<br>`);
let mySplit = zin.split();
document.write(`split:${mySplit}}<br>`);
document.write(`Array:${mySplit[0]}<br>`);
document.write(`Substring:${zin.substring(2,9)}<br>`)
    //zoek eerste character = indexOf
document.write(`positie uit een string:${zin.indexOf('z')}<br>`);
//
document.write(`laatste positie:${zin.lastIndexOf('e')}<br>`);
//
document.write(`vervangen=${zin.replace('e','o')}<br>`);
//Verandert een getal in een string
let getal = 5;
document.write(`getal naar string: ${getal.toString()}<br>`)

//Ongeacht de tussenstop (zoals punt en letter) het zal blijven zoeken naar nummers
let num1 = parseFloat("10.66abc"); //afkappen
document.write(num1);
//Tip: wanneer er geen puur nummer maar ook wat tekst inzit, dan herkent hij het niet 'NaN'
let num2 = Number("10.66abc"); //NaN
document.write(num2);
//Hij stop op het moment hij geen cijfer vind, dus in dit geval de punt'.'
let num3 = parseInt("10.66abc"); //10
document.write(num3);