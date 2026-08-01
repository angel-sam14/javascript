// // switch

// day

// let day = 5
// let dayName
//       switch(day){
//           case 1:
//             dayName = "Sunday"
//         break

//         case 2:
//             dayName = "Monday"
//         break

//         case 3:
//             dayName = "Tuesday"  
//         break

//         case 4:
//             dayName = "Wednesday"  
//         break

//         case 5:
//             dayName = "Thursday"  
//         break

//         case 6:
//             dayName = "Friday"  
//         break

//         case 7:
//             dayName = "Saturday"  
//         break

//         default:
//             dayName = "Invalid day"
    
// }
// console.log(dayName)


// grade


// let mark = 85;
// let grade;

// switch (true) {
//     case mark >= 90:
//         grade = "A+";
//         break;

//     case mark >= 80:
//         grade = "A";
//         break;

//     case mark >= 70:
//         grade = "B+";
//         break;

//     case mark >= 60:
//         grade = "B";
//         break;

//     case mark >= 50:
//         grade = "C";
//         break;

//     default:
//         grade = "Fail";
// }

// console.log(grade);


// loop

// 1.for (intialization;condition;increment/decrement){
// code block
// }

// print 1-10

// for(let i=10;i<=1;i++) {
// console.log(i);
// }

// print 10-1

//  for(let i=10;i>=1;i--) {
// console.log(i);
// }

// even number

// for(let i=1;i<=10;i++){
//     if(i%2===0)
//     console.log(i)
// }


// number

// let firstNumber = Number(prompt("Enter the first number:"))
// let SecondNumber = Number(prompt("Enter the Second number:"))

// for(let i=firstNumber;i<=SecondNumber;i++){
    // console.log(i)
// }


// 2.while loop/entry controlled loop

// initialization
// while(condition){
// code block
// increment/decrement
// }

// print 1-10

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// print 10-1

// let i = 10;

// while (i > 1) {
//     console.log(i);
//     i--;
// }

// even number

// let i = 10;

// while (i >= 1) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i--;
// }

// odd number

// let i = 1;

// while (i <= 10) {
//     if (i % 2 != 0) {
//         console.log(i);
    // }
    // i++;
// }

// sum

// let i = 1;
// let naturalSum = 0;
// let oddSum = 0;
// let evenSum = 0;

// while (i <= 10) {

//     naturalSum = naturalSum + i;

//     if (i % 2 != 0) {
//         oddSum = oddSum + i;
//     } else {
//         evenSum = evenSum + i;
//     }

//     i++;
// }

// console.log("Natural Sum =", naturalSum);
// console.log("Odd Sum =", oddSum);
// console.log("Even Sum =", evenSum);

// 3. do while /exit controlled loop

// initialization
// do{
// codeblock
// increment/decrement
// }while(condition)


// 1-10

//  let i = 1
//  do{
//     console.log(i);
//     i++;
//  }while(i<=10)


// 10-1

// let i = 10;

// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// even number

// let i = 10;

// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i--;
// } while (i >= 1);

// odd number

// let i = 1;

// do {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 10);

// sum

// let i = 1;
// let naturalSum = 0;
// let oddSum = 0;
// let evenSum = 0;

// do {
//     naturalSum = naturalSum + i;

//     if (i % 2 != 0) {
//         oddSum = oddSum + i;
//     } else {
//         evenSum = evenSum + i;
//     }

//     i++;
// } while (i <= 10);

// console.log("Natural Sum =", naturalSum);
// console.log("Odd Sum =", oddSum);
// console.log("Even Sum =", evenSum);


// 4.nested for loop


// pattern printing

// for (let i = 0; i <= 3; i++) {
//     let pattern = '';

//     for (let j = 0; j <= 3; j++) {
//         pattern += '*';
//     }

//     console.log(pattern);
// }


// 1. number printing

// for (let i = 1; i <= 4; i++) {
//     let pattern = "";

//     for (let j = 1; j <= 4; j++) {
//         pattern += i;
//     }

//     console.log(pattern);
// }


// 2.pattern

// for (let i = 1; i <= 4; i++) {
    // let pattern = "";

    // for (let j = 1; j <= 4; j++) {
        // pattern += j;
    // }

    // console.log(pattern);
// }

// 3.pattern

// for (let i = 1; i <= 4; i++) {
//     let pattern = "";

//     for (let j = i; j < i + 4; j++) {
//         pattern += j;
//     }

//  console.log(pattern);
// }

// 4.pattern

// let num = 1;

// for (let i = 1; i <= 3; i++) {
//     let pattern = "";

//     for (let j = 1; j <= 4; j++) {
//         pattern += num + " ";
//         num++;
//     }

//     console.log(pattern);
// }


// 5.pattern

// for(let i = 1;i<=4;i++) {
//     let pattern= "";
//     for(let j = 1;j<=i;j++) {
//         pattern+="*";
//     }
//     console.log(pattern);
// }


// 6.PATTERN

// let num=1
// for(let i = 1;i<=3;i++) {
//     let pattern= "";
//     for(let j = 1;j<=i;j++) {
//         pattern+= j+ " ";
//         num++;
//     }
//     console.log(pattern);
// }