// print messages on console
console.log("welcome to js course!");

//variables
// age=22;
// dob="01-01-2003";
// isStudent=true;
// console.log(age,dob,isStudent);

//scope of variables
let age=25;
let dob="02-01-2005";
let isStudent=true;
let girlFriend=null;
let job;
console.log(age,dob,isStudent);

//type of varialbes
//these are primitive data type
console.log(typeof age);//number
console.log(typeof dob);//string
console.log(typeof isStudent);//boolean
console.log(typeof girlFriend);//object but consider it as null primitive type
console.log(typeof job);//undefined

//these are non primitive data types
const student={
    fullName:"law pandit",
    age:21,
    isStudent:true,
    roll:"0177EC211029"
};

console.log(student);
console.log(typeof student);//object

//How to access object data
//2 ways to access
console.log(student.fullName);//by using dot(.) operator
console.log(student["roll"]);//by using [""] , inside ""  we write variables name


//Note:we can't change const variable value but If data type is an Object then we can change
const price=10;
console.log(price);

student.age=25;
console.log(student.age);

//Rule to remember
// => we can't change const variable value but If data type is an Object then we can change
// => use only 'let' and 'const' variable scope don't use 'var'




