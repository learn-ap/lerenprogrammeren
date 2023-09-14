//Eerst moet ik een ster hebben dus een veriable is nodig
let ster="*";
// Een string waarin de ster komt
let resultaat=""
// hier zeg ik dat maximum 5 mag uitgevoerd worden
for (let i=1;i<=5;i++){
    resultaat = resultaat + ster;
    document.write(resultaat+"<br>");
}
for (let j=1;resultaat>=5;resultaat-j){
    resultaat = resultaat + ster;
    document.write(resultaat+"<br>");
}
