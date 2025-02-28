// Operators are special symbol that perform some operation

//1) Arithmetic Operator
let a = 10;
let b = 5;

console.log("a=", a, "b=", b);
console.log("a + b =", a + b);//addition
console.log("a - b =", a - b);//subtraction
console.log("a * b =", a * b);//multiplication
console.log("a / b =", a / b);//division
console.log("a % b =", a % b);//modulo
console.log("a ** b =", a ** b);//exponential(10^5)==100000

//2) Relational Operator

let c = 8;
let d = 4;

console.log("c=", c, "d=", d);
console.log("c > d =", c > d);//true
console.log("c < d =", c < d);//false
console.log("c >= d =", c >= d);//true
console.log("c <= d =", c <= d);//false
console.log("c == d =", c == d);//false 
console.log("c != d =", c != d);//true
console.log("c === d =", c === d);//false
console.log("c !== d =", c !== d);//true

//Note : (==) operator checks only content while (===) operator checks content + type of data.

//3) Assignment Operator

let e = 5;

console.log("e=", e);
console.log("e += 4 =", e += 4);//addition//9
console.log("e -= 4 =", e -= 4);//subtraction//1
console.log("e *= 4 =", e *= 4);//multiplication//20
console.log("e /= 4 =", e /= 4);//division//1.25
console.log("e %= 4 =", e %= 4);//modulo//1
console.log("e **= 4 =", e **= 4);//exponential(10^5)==100000//625

// 4) Logical Operator

console.log("(10===10) && (2>5) =",(10===10) && (2>5));//Logical AND
console.log("(10===10) || (2>5) =",(10===10) || (2>5));//Logical OR
console.log("5!=5",5!=5);//Logical NOT



// ======================Conditional statement=====================

//if

/*
let modeIf=prompt("Enter Mode dark");
let colorIf;

if(modeIf=="dark"){
    colorIf="black";
}
console.log(colorIf);
*/

//if-else

/*
let modeIfElse=prompt("Enter Mode dark or light");
let colorIfElse;

if(modeIfElse=="dark"){
    colorIfElse="black";
}else{
    colorIfElse="light";
}
console.log(colorIfElse);
*/

//else-if ladder

/*
let age=prompt("Enter age");
if(age<18){
    console.log("Junior");
}else if(age>60){
    console.log("Senior");
}else{
    console.log("Middle");
}
*/

//======================ternary operator======================

let ageForVote=prompt("enter age for vote");
ageForVote>18?console.log("eligible for vote"):console.log("Not eligible for vote");