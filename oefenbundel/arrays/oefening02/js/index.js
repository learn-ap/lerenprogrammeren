var reeks1 = [];
var reeks2 = [];
let som = 0;
let teller = 0;

while(teller < 11){
    reeks1.push(teller);
    reeks2.push(teller);
    teller++;
}
teller=1;
while(teller <=10){
    som = reeks1[teller] + reeks2[teller];
    document.write(reeks1[teller], '+', reeks2[teller], '=', som + '<br>');
    teller++;}