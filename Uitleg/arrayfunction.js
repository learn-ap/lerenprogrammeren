//slice methode, is voor dingen te verbergen van de op gevraagde info
const fruits = ['Appel', 'Banaan', 'Sinaasappel', 'Druif', 'Kiwi'];

// Extraheren van een subarray van index 1 tot 4 (exclusief)
const subarray = fruits.slice(1, 4);
console.log(subarray); // Geeft ['Banaan', 'Sinaasappel', 'Druif'] weer

// De oorspronkelijke array blijft ongewijzigd
console.log(fruits); // Geeft ['Appel', 'Banaan', 'Sinaasappel', 'Druif', 'Kiwi'] weer

// Slicen vanaf het begin tot index 3 (exclusief)
const slice1 = subarray.slice(0, 3); // Geeft [1, 2, 3] weer

// Slicen vanaf index 2 (inclusief) tot het einde
const slice2 = subarray.slice(2); // Geeft [3, 4, 5] weer

// Slicen met negatieve indexen
const slice3 = subarray.slice(-2); // Geeft [4, 5] weer

////////////////////////////////////////////////////////////////////////////////////////////////////////

//SPLICE methode, kan dingen, wijzigen, vervange en toevoegen, zelfs op een 'const'
const fruits = ['Appel', 'Banaan', 'Sinaasappel', 'Druif', 'Kiwi'];

// Extraheren van een subarray van index 1 tot 4 (exclusief)
const subarray = fruits.slice(1, 4);
console.log(subarray); // Geeft ['Banaan', 'Sinaasappel', 'Druif'] weer

// De oorspronkelijke array blijft ongewijzigd
console.log(fruits); // Geeft ['Appel', 'Banaan', 'Sinaasappel', 'Druif', 'Kiwi'] weer
