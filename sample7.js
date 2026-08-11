// // call by value
// ----------------------------
// let a = 10
// let b = a
//  b=b+1
//  console.log(b)
//  console.log(a)
  
// // call by reference
// ---------------------------------
// let arr = [1,2,3,4,5]
// let arr2 = arr
// arr2[0]=10
// console.log(arr)
// console.log(arr2) 

// array iteration methods
// --------------------------------
//  1.forEach:break,continue chyn pattilla
// --------------
// syntax:array.forEach(function(element,index,array){
// block of code
// })

// let arr = ['apple', 'pineapple', 'grapes'];

// arr.forEach((element, index, array) => {
//     console.log(`${index}:${element}`);
// });
// -------------------------------------------------

// let marks = [75,82,45,90,68]

// marks.forEach((mark) => {
//     if (mark >= 75) {
//         console.log(mark + " : Pass");
//     } else {
//         console.log(mark + " : Fail");
//     }
// });
// ------------------------------------------------------

// 2.Map
// --------------

// syntax:let newArray = array.map(function(element,index,array){code block})

// let arr = [1,2,3,4,5]
// let sqrd = arr.map(element=>element*element)
// console.log(sqrd)
// ----------------------------------------------------------

// const prices = [100,200,300,400,500];
// 12.5%
// const newprices=[];

// prices.forEach((price) => {
//     let newPrice = price + (price * 12.5 / 100);
//     newprices.push(newPrice);
// });
// console.log(newprices);
// ------------------------------------------------------------

// 3.Filter
// --------------------

// newArray = array.filter(function(element,index,array){block of code})

// let arr = [1,2,3,4,5,6,7,8]
// let even = arr.filter(element=>element%2==0)
// console.log(even) 
// ----------------------------------------------------------------------------

// const age = [12,18,25,15,30,16,22];

// age.filter((age) => {
//     if (age <= 18) {
//         //  console.log(age + " : Eligible for voting");
//         console.log(' Eligible for voting');
//      } else 
//         //  console.log(age + " : Not eligible for voting");
//         console.log('Not eligible for voting')
//     });

// --------------------------------------------------------------------

// 4.Reduce
// ----------------

// syntax: let totalValue = arr.reduce(function(accumulator,element,index,array){code block},initialvalue)

// sum
// -----------

// let arr = [1,2,3,4,5]

// let sum = arr.reduce((acc,element)=>acc+element,0)
// console.log(sum)
// ------------------------------------------

// product
// ---------------

let arr = [1,2,3,4,5]

let sum = arr.reduce((acc,element)=>acc*element,1)
console.log(sum)

// regular expression