
// String ==> squence of character within " "(double quote) or ' '(single quote) or ` `(back tique)
//Note :: String is Immutable in js

//normal string
let str1 = "law Pandit ! welcome to js world";
console.log(str1);

//another way to write string
let str2 = 'hi there ! welcome to our js';
console.log(str2);

//this is called templates string 
//if template string contains some expression then it is called string interpolation
let str3 = `the sum of 3 + 4 is ${3 + 4}`;
console.log(str3);


//=============String Methods in Js=============================
//these are built in functions to manipulate string

//toUpperCase()
console.log(str1.toUpperCase());

//toLowerCase()
console.log(str2.toLowerCase());

//trim()==> to remove whitespaces (first and last only)
let trimStr = "      Ram    is   cool   lord     ";
console.log(trimStr.trim());

//slice(start,end)
console.log(str1.slice(4, 11));

//concat(str)
console.log(str1.concat(str2));

//replace(searchVal,newVal)
console.log(str1.replace("law", "sudhir"));

//chatAt(idx)
console.log(str2.charAt(1));


//Note :: String are immutable in JS
// It means , original string will same but after change value of 
// string , we can assign value in new string
//Example
let val = "law";
newVal = val + "sudhir";
console.log(val);//after concat the value of val is "law"

console.log(newVal)//lawsudhir 

