//een associative-array = vervangt nummers met een benaming
let cursisten = ['Tom','Tim','bart','Els'];
for(let i=0;i< cursisten.length;i++){
    document.write(cursisten[i]+"<br>")
}

//als je een "undefined" error krijgt, dat betekent dat je te ver telt
// zet dan "-1" op het einde van xxxx.length, als je gebruik maakt van '<=' in plaats van '<'