
let marks=[85,97,44,37,76,60];

let totalMarks=0;

for(let i of marks){
    totalMarks+=i;
}

//calculating average marks
let avg=totalMarks/marks.length;
console.log(avg);