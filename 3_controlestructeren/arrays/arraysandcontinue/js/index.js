//

let data = ['Tom','Tim',1980,1973,'bart','Els'];

//continue = overslaan, het ga kijken of het een bepaalde een type is, is het, dan slaat hij het over
//for=loopstarter
for(index in data){
    if(typeof data[index]=== 'string') continue;
    document.write(data[index] + "<br>");
}

