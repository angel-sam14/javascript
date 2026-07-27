// 1. arithmetic operators

let x = 10;
let y = 5;

let sum = x + y; // addition
let difference = x - y; // subtraction
let product = x * y; // multiplication
let quotient = x / y; // division

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// 2. Assignment operators

let a = 10;
a += 5; // equivalent to a = a + 5
console.log("Value of a after += 5:", a);
 a = a+1
 a-=1
 a*=1
 a/=1


//  comparison operators

// == //just checks the value
// === // checks the value and the type 
let c = 20;  
let d = "20";

console.log(c==d); // true
console.log(c===d); // false

// >,<.<=,>=,!=,!==


// logical operators
 
// AND (&&), OR (||), NOT (!)
 
console.log(c==d && c===d)
console.log(c==d || c===d)
console.log(!(c==d))

// ternary operator

// let age = 14;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log("Can vote:", canVote);

// unary operators

// let b= 10;
// console.log(++b);// pre-increment
// console.log(b++);// post-increment

// console.log(b--);// post-decrement
//  console.log(--b);// pre-decrement

// input box

// let age = prompt("Enter your age:");
// let canVote = (age >= 18) ? "Eligible" : "Not Eligible";
// console.log("Can vote:", canVote);

// conditional statements
 
// if else statement

let  z = 10;
let u= 20;

if (z > u) {
    console.log("${z} is larger ");
}       
else{
    console.log("${u} is larger ");
}

// else if statement
//  let m =(prompt("Enter a number:"));
//  if(m==1){
//     console.log("sunday");
//  }
//  else if(m==2){
//     console.log("monday");
//  }  
//  if(m==3){
//     console.log("tuesday");
//  }  
// else if(m==4){
//     console.log("wednesday");
//  }
// if(m==5){
//     console.log("thursday");
//  }
//  else if(m==6){
//     console.log("friday");
//  }
// if(m==7){
//     console.log("saturday");
//  }
// else if(m>7){
//     console.log("Invalid day");
// }

// logical operators

// let p=prompt("Enter your marks:");
// if(p>=90 && p<=100){
//     console.log("A+ grade");
// }
// if(p>=80 && p<=90){
//     console.log("A grade");
// }
// else if(p>=70 && p<80){
//     console.log("B grade");
// }

// Nested if

let i = 10
let o = 15
let s = 20
if(i<o){
    if(o<s){
        console.log("s is larger")
    }
    else{
        console.log("o is larger")
    }
}
else{
    if(i<s){
        console.log("i is larger")
    }
    else{
        console.log("s is larger")
    }
}