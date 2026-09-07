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

// 4.REDUCE
// ----------------

// syntax: let totalValue = arr.reduce(function(accumulator,element,index,array){code block},initialvalue)

// SUM
// -----------

// let arr = [1,2,3,4,5]

// let sum = arr.reduce((acc,element)=>acc+element,0)
// console.log(sum)
// ------------------------------------------

// PRODUCT
// --------

// let arr = [1,2,3,4,5]

// let sum = arr.reduce((acc,element)=>acc*element,1)
// console.log(sum)

// regular expression-seminar

// 12/8/26
// --------

// STACK
// ------
// Stack: is a linear data structure
// it follows LIFO 

// let stack = []
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack)
// stack.pop()
// console.log(stack)
// --------------------------------------

// QUEUE
// -------
// A queue is linear ds
// it follows FIFO 

// let queue = []
// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.push(4)
// console.log(queue)
// queue.shift()
// console.log(queue)
// ---------------------------------------


// This keyword
// ----------------
// Thiskeyword:refers to a context in which a fn is executed.
// its value depends on how the fun is called,not where it is defi

// console.log(this)
// const person = {
//     name:'Angel',
//     age:21,
//     greet:function(){
//         console.log('Hello $(this.name)')
//     }

// }

// console.log(person.name)
// person.greet()
// ---------------------------------------------------------------------

// Key,value,entries-3 methods in objects
// // ---------------------------------------

// const person = {
//      name:'Angel',
//      age:21,
//      course:'python'
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// -----------------------------------------------------

// MAP
// --------
// Map :built in object that allows you to store key-value pairs
// similar to an object,but with some key differences
// map are particularly useful when you need a collection of data how keys can be any type (not just strings or symbol )

// const myMap = new Map([
//     ['name','Gowri'],
//     ['age',21],
//     ['course','python']
// ])

// const myMap = new Map()

// myMap.set('Name','Angel')
// console.log(myMap)

// console.log(myMap.get('Name'))
// console.log(myMap.has("Name"))
// console.log(myMap.size)

// myMap.delete('Name')
// console.log(myMap)
// -------------------------------------------------------

// CALLBACK
// --------------

// callback fn:fn passed as an argument to another fun ,to be executed later
// handle asynchronous operations(timer,api calls.......)
// enables custom behavior in reusable code

// a fun(caller) accepts another fun (callback) as a parameter
// a caller invokes the callback at a specific time or condition
// flow:pass callback=>caller executes=>callback fun

// fun caller(callback){callback}{callback()}

// function greet(){
//     console.log('Hello from callback')
// }

// function executeCAllback(cb){
//     cb()
// }
// executeCAllback(greet)

// function delayedMessage(callback){
//    setTimeout(callback,1000)
// }

// delayedMessage(()=>console.log("Delayed Message"))
// --------------------------------------------------------------------------------

// 13/8/26
// ----------

// CALLBACK HELL
// -------------
// function step1(callback) {
//    setTimeout(() =>{
//       console.log("step 1 completed");
//       callback();
//    },1000);
// }
// function step2(callback) {
//    setTimeout(() =>{
//       console.log("step 2 completed");
//       callback();
//    },1000);
// }
// function step3(callback) {
//    setTimeout(() =>{
//       console.log("step 3 completed");
//       callback();
//    },1000);
// }

// step1(()=> {
//    step2(()=> {
//       step3(()=> {
//          console.log("All steps completed")
//       });
//    });
// });
// -----------------------------------------------------------

// PROMISE
// -------------------
// promise:An object representing the eventual completion(or failure) of an asynchronous operation and its resulting value
// let myPromise = new promise((resolve,reject)=>{
// (if success) {
// resolve(value)
// } 
// else{
         // reject(value)
// } 
// resolve
// reject 
// })

// STATES OF PROMISE
// -----------------
// 1.pending
// 2.fullfilled
// 3.rejected

// 2 SIDES OF PROMISE:Resolve and Reject
// --------------------

// let myPromise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       console.log('Hello')
//       resolve('Timer ok')
//    },1000);
// })
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))
//  --------------------------------------------------

// PROMISE CHAINING
// ---------------------
// function step1() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log("step 1 completed");
//          resolve();
//       },1000);
//    });
// }
// function step2() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log("step 2 completed");
//          resolve();
//       },1000);
//    });
// }
// function step3() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log("step 3 completed");
//          resolve();
//       },1000);
//    });
// }
// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => {
//        console.log("All steps completed");
//      });
// ---------------------------------------------------------         

// METHODS IN PROMISE
// --------------------------

// 1.Promise.all()
// runs all promises in parallel and waits for all to complete
// All promises run together,it waits until all are resolved
// if one promise rejects in promise.all() the entire promise.all() fails immidiately and the .catch()

// let p1 = new Promise((resolve,reject) => setTimeout(() => reject("Task 1 rejected"),1000));
// let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1"),1000));
// let p2 = new Promise(resolve => setTimeout(() => resolve("Task 2"),2000));
// let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3"),3000));

// Promise.all([p1,p2,p3])
//      .then(results => console.log("All Tasks Done:",results))
//      .catch(error => console.log("Error:",error));
// -------------------------------------------------------------------------

// 2.Promise.race()
// Returns the first resolved/rejected promise

// let p1 = new Promise((resolve,reject) => setTimeout(() => reject("Task 1 rejected"),1000));
//  let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1"),1000));
//  let p2 = new Promise(resolve => setTimeout(() => resolve("Task 2"),2000));
//  let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3"),3000));

//   Promise.race([p1,p2,p3])
//       .then(result => console.log("First completed:",result))
//       .catch(error => console.log("Error:",error))
// ------------------------------------------------------------------------------------

// 3.Promise.allSettled()
// Waits for all promises and returns the rsults of each whether fulfilled or rejected


 // let p1 = new Promise((resolve,reject) => setTimeout(() => reject("Task 1 rejected"),1000));
//  let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1"),1000));
//  let p2 = new Promise(resolve => setTimeout(() => resolve("Task 2"),2000));
//  let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3"),3000));

//  Promise.allSettled([p1,p2,p3])
//            .then(results => console.log("All Tasks Done:",results))
//            .catch(error => console.log("Error:",error));
// ------------------------------------------------------------------------------------------------

// 4.Promise.any()
// Returns the first fulfilled promise(ignores rejections)

//  let p1 = new Promise((resolve,reject) => setTimeout(() => reject("Task 1 rejected"),1000));
//  let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1"),1000));
//  let p2 = new Promise(resolve => setTimeout(() => resolve("Task 2"),2000));
//  let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3"),3000));

//  Promise.any([p1,p2,p3])
//            .then(results => console.log("All Tasks Done:",results))
//            .catch(error => console.log("Error:",error));
// ------------------------------------------------------------------------------------------------

// 14/8/26

// asyn/await:wait chym readability problem illa,syn method il handle chynu,.then,.catch use chynen pakaram
// -----------
// function getUser() {
//     return Promise.resolve({ id: 1 });
// }

// function getOrder(id) {
//     return Promise.resolve(['order1', 'order2']);
// }

// function getInvoice(orders) {
//     return Promise.resolve(45689);
// }

// async function handlePromise() {
//     let p1 = Promise.resolve('data');
//     let result = await p1;
//     console.log(result);
//     let user = await getUser();
//     let orders = await getOrder(user.id);
//     let amount = await getInvoice(orders);

//     console.log(amount);
// }

// console.log(handlePromise());


// console.log('Start'):-snyc 1

// setTimeout(() => {
//     console.log('Inside setTimeout'):-async 4
// }, 0)

// Promise.resolve("Promise")
//     .then(console.log):-async 3

// console.log('End'):-sync 2
// (event loop mechanism kond aahn ingne work akunnath)
// 18/8/26
// --------
// dom use chyth print chynm
// -----------------------------------------------------