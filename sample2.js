// data type

// primitive datatype :single value,immutable

//  1. Number
// let num1 = 10
// let num2 = 2.5

// 2.string
// let str1 = "Hello"

// 3.boolean
// let truth = true

// 4.undefined
// let c
// console.log(c) 

// 5.null
// let d = null

// 6. symbol
// let sym = symbol("unique");

// 7. BigInt
// let bigIntNum = 1234567890123456789012345678901234567890;



// 2. Non-primitive datatype : multiple value, mutable


// 1. Object
// let obj = {
    // name: "John",
    // age: 30,
    
// }

// 2. Array
// let arr = [1, 2, 3, 4, 5]


// 3. Function
// function greet(name) {
    // return "Hello, " + name + "!";
// }



// type casting
// also known as type conversion, is the process of converting a value from one data type to another. In JavaScript, there are two types of type casting: implicit and explicit.js is dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. However, sometimes you may need to convert a value from one data type to another, and that's where type casting comes in.


// 1.implicit type casting : is when JavaScript automatically converts a value from one data type to another. This can happen when you perform operations on values of different data types, or when you assign a value of one data type to a variable of another data type. For example:


// string coercion
// let a ='the result is'
// console.log(typeof a) //string
// let b = 42
// console.log(typeof b) //number
// let c = a+b
// console.log(typeof c) //string
// console.log(c) //the result is42


//  numeric coercion
// let result= "5"*2
// console.log(result) 


// 2. explicit type casting : is when you manually convert a value from one data type to another using built-in functions or methods. For example:

 c ='42'
 console.log(typeof c)
let d = Number(c)
console.log(typeof d)
let str = 43
console.log(typeof str)
let str1 = String(str)
console.log(typeof str1)
let str2 =str.toString()
console.log(typeof str2)