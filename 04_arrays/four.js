
//Arrays means storing multiple value in a varialbe.

//similar type of data
let marks=[96,23,53,75,24];
console.log(marks); //[96, 23, 53, 75, 24]

//dis-similar type of data
let info=["rahul",68,"delhi"];
console.log(info); // ['rahul', 68, 'delhi']

//similar 
let heroes=["ironman","antman","thor","hulk"];
console.log(heroes); // ['ironman', 'antman', 'thor', 'hulk']

//we can access by using index
console.log(heroes[3]); // hulk

//looping over an Arrays
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

//===================Arrays Methods================

//push()--> add element to end
heroes.push("captain america");
console.log(heroes);  //['ironman', 'antman', 'thor', 'hulk', 'captain america']

//pop() --> remove element from last
heroes.pop();
console.log(heroes); //  ['ironman', 'antman', 'thor', 'hulk']

// toString() --> convert array to string
console.log(heroes.toString()); // ironman,antman,thor,hulk

//concat() --> joins multiple arrays & return result
let newArrays=heroes.concat(info);
console.log(newArrays); // ['ironman', 'antman', 'thor', 'hulk', 'rahul', 68, 'delhi']

//unshift() --> add element at first
heroes.unshift("spiderman");
console.log(heroes); // ['spiderman', 'ironman', 'antman', 'thor', 'hulk']

//shift() --> delete from start & return 
let hero=heroes.shift();
console.log(hero); // spiderman

console.log(heroes); //['ironman', 'antman', 'thor', 'hulk']

//slice(startIndex , endIndex) --> return a piece of array
let piece=heroes.slice(2);
console.log(piece); //['thor', 'hulk']

//splice(startIndex , delCount , newEl1...) --> change original array 

let spliceResult=heroes.splice(1,1,"law");
console.log(spliceResult); // ['antman']
console.log(heroes); // ['ironman', 'law', 'thor', 'hulk']