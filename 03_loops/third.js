
//loops

//==========================for loop=========================
// for(let i=1;i<=5;i++){
//     console.log("i = ",i);
// }

//==============================while loop======================
// let sum=0;
// let num=1;
// while(num<6){
//     sum=sum+num;
//     num++;
// }
// --num;
// console.log("sum of ",num, " natural number is ",sum);


// ======================================do while loop=======================

// let num=5;
// do{
//     console.log("apna college");
//     num--;
// }while(num>0);


//=========================================for of loop==========================
//taking one by one index automatically

// let str="hitman";
// for(let s of str){
//     console.log(s);
// }


//=======================================for in loop=================
// it used for object

let student={
    name:"law",
    roll:"0177EC211029",
    gender:"male"
};

for(let s in student){
    console.log("key ",s,", value ",student[s]);
}