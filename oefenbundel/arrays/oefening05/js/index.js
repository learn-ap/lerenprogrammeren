
/*
Wemakenonzeklaslijst.
Vraagaandegebruikerhoeveelnamenhijwilingevenenvuldezeineenarray. •
Zorgervoordatjedenamenonderelkaarafdruktopdevolgendemanier.
Dirk
  Sam
Luc
  Bob

*/
var namenLijst=[];
aantalNamen = parseInt(prompt('Hoeveel namen wenst u in te geven?'));
for(var x=0; x <= aantalNamen-1; x++){
    namenLijst.push(prompt(`Geef naam nummer ${x+1} in`));
}
for(var x=0; x <= aantalNamen-1; x++){
    var resultaat = (x%2 == 0) ? document.write('- ',namenLijst[x],'<br>') :  document.write('&nbsp;&nbsp;- ',namenLijst[x],'<br>');//voorbeeld van shorthand if, else.
}

/*
Dit is een enkele regel code die kan worden opgesplitst in twee delen gescheiden door ? en ::

(x % 2 == 0) ? document.write('- ', namenLijst[x], '<br>') : document.write('&nbsp;&nbsp;- ', namenLijst[x], '<br>');

De ? markeert het begin van de ternary operator en : markeert het einde ervan.

(x % 2 == 0) is de voorwaarde die wordt gecontroleerd. Het controleert of x een even getal is door te kijken of het resultaat van de modulo-operatie (%) gelijk is aan 0. Als x even is, is deze voorwaarde waar (true).

    Het stuk na ? wordt uitgevoerd als de voorwaarde waar is. Hier wordt document.write('- ', namenLijst[x], '<br>') uitgevoerd. Dit schrijft de naam in de namenLijst op het scherm met een enkel koppelteken ('-') ervoor.

    Het stuk na : wordt uitgevoerd als de voorwaarde niet waar is (false). Hier wordt document.write('&nbsp;&nbsp;- ', namenLijst[x], '<br>') uitgevoerd. Dit schrijft de naam op het scherm met twee spaties gevolgd door een koppelteken, wat een visuele scheiding creëert tussen de oneven namen.

    Kortom, deze code bepaalt of elke naam in de namenLijst wordt weergegeven met een enkel koppelteken voor even indexen (0, 2, 4, enz.) en met twee spaties gevolgd door een koppelteken voor oneven indexen (1, 3, 5, enz.). Dit zorgt voor een visuele scheiding tussen de even en oneven namen op het scherm.
*/



















