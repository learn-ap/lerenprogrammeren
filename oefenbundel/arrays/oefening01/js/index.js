let cursisten = ['Tom','Tim','bart','Els'];
//let cursisten = new Array('Tom';'Tim','bart','Els');
let cursusJaar = ['2017','2018','2019','2020','2021','2022','2023'];

document.write(cursisten);
document.write(cursisten[0]);
document.write(cursisten[3]);
document.write(cursisten[4]);
cursisten[0]='Pieter'; //je vervangt nul met Pieter
document.write(cursisten);

//hoe je de lengte ( van een geindexeerd vind
document.write(cursisten.length);

//toevoegen van een cursist
cursisten.push('Marieke');
document.write(cursisten);
document.write(cursisten[4]);

//cursist toevoegen aan het begin ?er tussen in schuiven?
cursisten.shift('Thomas');
document.write(cursisten);

//cursist verwijderen (eerste)
cursisten.shift();
document.write(cursisten);

//index of plaatsbepaling van items in een geindexeerd (numerieke of geindexeerde geindexeerd
//LET OP als er meerdere dezelfde naam heeft, zoekt hij niet meer verder
document.write(cursisten.indexOf('Bart'));