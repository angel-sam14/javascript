// // 1.employee bonus

// let salary = Number(prompt("Enter your salary:"));
// let years = Number(prompt("Enter your years of service:"));

// if (years > 5) {
//     let bonus = salary * 5 / 100;
//     console.log("Bonus amount =", bonus);
// } else {
//     console.log("No bonus");
// }


// // 2.electricity bill

// let units = Number(prompt("Enter number of units:"));
// let bill;

// if (units <= 100) {
//     bill = 0;
// } 
// else if (units <= 200) {
//     bill = (units - 100) * 5;
// } 
// else {
//     bill = (100 * 5) + (units - 200) * 10;
// }

// console.log("Electricity Bill =", bill);



// // 4. monuments
 
// let city= prompt("Enter your city:");
 
// switch (city) {
//     case "Delhi":
//         console.log("Red Fort");
//         break;

//     case "Agra":
//         console.log("Taj Mahal");
//         break;

//     case "Jaipur":
//         console.log("Jal Mahal");
//         break;
//     default :
//     console.log("monument not available");      
    
// }



// 5. divisible by 3 or not


// let num =Number(prompt("Enter the Number:"));

// let lastdigit = num % 10;

// if (lastdigit % 3 === 0) {
//     console.log("last digit is divisible by 3");
// }
// else {
//     console.log("last digit is not divisible by 3");
//  }


// 6.bike


// let cost = Number(prompt("Enter cost price of bike:"));
// let tax;

// if (cost > 100000) {
//     tax = cost * 15 / 100;
// } 
// else if (cost > 50000) {
//     tax = cost * 10 / 100;
// } 
// else {
//     tax = cost * 5 / 100;
// }

//  console.log("Road Tax =", tax);


// 7.even and divisible by 4

// let num = Number(prompt("Enter a number:"));

// if (num % 2 === 0 && num % 4 === 0) {
//     console.log("Even and divisible by 4");
// } 
// else if (num % 2 !== 0 && num > 10) {
//     console.log("Odd and greater than 10");
// } 
// else {
//     console.log("Neither of the above");
// }


// 8. purchase discount

// let amount = Number(prompt("Enter purchase amount:"));

// if (amount > 100) {
//     console.log("You get a 20% discount!");
// } 
// else if (amount >= 50 && amount <= 100) {
//     console.log("You get a 10% discount!");
// } 
// else {
//     console.log("No discount available.");
// }


// 9.mobile data

// let data = Number(prompt("Enter data usage in GB:"));
// let charge;

// if (data <= 2) {
//     charge = 200;
// } 
// else if (data <= 10) {
//     charge = 200 + (data - 2) * 50;
// } 
// else {
//     charge = 600 + (data - 10) * 50;
// }

// console.log("Monthly Charge =", charge);


// 10.sum


// let naturalSum = 0;
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 1; i <= 10; i++) {

//     naturalSum = naturalSum + i;

//     if (i % 2 === 0) {
//         evenSum = evenSum + i;
//     } else {
//         oddSum = oddSum + i;
//     }
// }

// console.log("The sum of natural number is =", naturalSum);
// console.log("The sum of even number is=", evenSum);
// console.log("The sum of odd number is =", oddSum);


// 11.print 1 -10

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 12. odd number btw 1-20

//  let i = 1;

//  while (i <= 20) {
//      if (i % 2 != 0) {
//          console.log(i);
//     }
//     i++;
// }


// 13. colour using loop

// const colors = ['red', 'green', 'blue'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//  }

// 14. print sum of 1-50 using while

// let i = 1;
// let sum = 0;

// while (i <= 50) {
//     sum = sum + i;
//     i++;
// }

// console.log("Sum =", sum);

// 15. print 10-1 using do-while


// let i = 10;
//  do {
//      console.log(i);
//     i--;
//  } while (i >= 1);


// 16. print in reverse order

// const num =[1,2,3,4,5];
// for (let i = num.length - 1; i >= 0; i--) {
//     console.log(num[i]);
// }


//17.find total [10,20,30,40]

const num=[10,20,30,40];
let sum = 0;

for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
}

console.log("Total =", sum);