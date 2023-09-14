//

let data = ['Tom','Tim',1980,1973,'bart','Els'];

//in dit voorbeeld gaat hij kijken of je een string ziet, vanaf het moment hij iet anders ziet dan stopt hij
for(index in data){
    if(typeof data[index]!== 'string') break;
    document.write(data[index] + "<br>");
}

