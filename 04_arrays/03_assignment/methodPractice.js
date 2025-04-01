
// Array creation to store company names
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies); // ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

//remove the first company from the array
let rmCompany=companies.shift();
console.log(rmCompany); //Bloomberg
console.log(companies) //['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

//Remove Uber & add Ola in its place
companies.splice(1,1,"Ola");
console.log(companies); // ['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix']

//Add Amazon at the end
companies.push("Amazon");
console.log(companies); //['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon']