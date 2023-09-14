//een associative-array = vervangt nummers met een benaming
//Note: hier zie je meerdere array = ofwel doos in een does, let op de haakjes [[doos,doos]]
let courseTeacher= [
    ['HTML5','TOM VANHOUTE'],
         {'COURSE':'MARKETING','PERSOON':'MAXIME VANMAERCKE'},
    ['LARAVEL','TOM VANHOUTE'],
];
//hier ga je net alsof je een bestand wil vinden in file explorer dieper gaan
document.write(courseTeacher[1]["PERSOON"], " ---- ");
// document.write(courseTeacher[1]["COURSE"], " ////// ");
// document.write(courseTeacher[0][1]);