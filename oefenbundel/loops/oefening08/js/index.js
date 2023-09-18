//eerst je problemen opsplitsen:
// eerst wat je wil doen is een nummer vragen aan de gebruiker
// als je een getal invult dan zet je eigenlijk een limiet
// dus de actie word uitgevoerd, tot het niet verder dan de limiet dat je ingegeven heb

//je vraagt zelf hoeveel nummers je wil ingeven, ENKEL voor een limiet in te geven.
let eindGetal = Number(prompt("geef een getal?"));
// 'i' start van de reeks, beginnen van '1'
// conditie: doe de 'for' zolang 'i' kleiner blijft dan het eindgetal
// manipulator 'i' door te vermenigvuldigen met 2

for(let i = 1; i<=eindGetal ;i*=2){
    // om te verzorgen dat de eindcijfer geen komma geeft
    if(i > 1){
        document.write(", ")
    }
    document.write(i);
}

// samengevat:
// de eerste loop word de "if"-actie niet uitgevoerd, omdat i=1.
// we vragen in de "if" of 1 > 1, NEE, omdat ze hetzelfde zijn en niet groter.
// DUS de "if" word niet uitgevoerd, met andere woorden, de string dat je wilt invoegen word niet toegevoegd
// dus de eerste loop ziet er zo uit "2" (NIETS VAN SPACIES OF KOMMA'S)

//Na de eerste loop is de "i" verandert in een "2". Dus wanneer het NU door de "if" functie gaat. dan zal de if-gedeelte WEL uitgevoerd worden.
// omdat het nu i=2 en dus groter is (i(=2) > 1) en dan zet hij de volgende string ", " (<- komma en spatie)
// dus de string komt voor het resultaat (eerst ", " en dan (i)
// de 2de loop ziet eruit als dit "2, 4" (<- i, (if=true) voegt hij eerst de string en dan de nieuwe "i")

//Als er geen berekeningen meer uitgevoerd worden dan doet hij de "if" niet meer (geen ", ".
// wanneer stopt hij met berekenen? wanneer het ingegeven limiet bereikt is "let = eindGetal"
// en dus geeft hij geen komma meer

