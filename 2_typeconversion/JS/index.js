
//eerst zeggen we met let result te beginnen met nul,
// Domdat er geen begin cijfer was, er was letterlijk niets


//const: is voor een cijfer te zetten dat niet can veranderen



let result = 0;
document.getElementById("add").onclick = function(){
    result = result + Number(document.getElementById("vakEen").value);
    document.getElementById("myResult").innerHTML = result;
}
