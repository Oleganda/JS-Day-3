//-------------------Basic---------------------------------
//ex 1 | Highest value in an array
//Create a program to find the highest value in an array. 

let max = 0;
let num = [2, 1, 4,-5, 9, 2]
for (i = 0; i < num.length; i++) {
    if(max < num[i]){
        max = num[i];
    }
}
  console.log(max)

//--------------------Intermediate--------------------------
// ex 1 | Compare two numbers

let martin = [76,64,81,57,94];
let thomas = [85,49,81,72,55];
let klaus = [65,91,84,67,85];
let maria = [93,70,81,64,84];
let david = [81,99,71,100,69];

function averageGrade (placeHolder) {
let sum = 0;
for (let val of placeHolder) {
    sum = sum + val;
}
let average = sum/placeHolder.length;
console.log(average);

if(average < 60){
    console.log("F");
}
else if (average < 70){
    console.log("D");
}
else if (average < 80){
    console.log("C");
}
else if (average < 90){
    console.log("B");
}
else {
    console.log("A");
}
}
console.log(averageGrade());


//ex 2 | FizzBuzz

for(i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0){
        console.log("Buzz");
    }
    else if ( i % 3 == 0){
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}

//ex 3
//try to recreate this form using a loop
for (let i = 0; i < 6; i++)
{
   for(let j = 0; j < i; j++ )
   {
   document.write('*');
    }
 document.write("<br/>");
}

    







