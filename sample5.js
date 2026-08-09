// Function
// --------------

// functions in js are reusable block of code designed to perform specific tasks
// only when it is called or trigerred

// syntax

// function function name(oparameters..) { function defenition
// block of code
// }

// function_name() function cal

// function greet(){
//     console.log("Hello Angel");
// }
// greet()

// let a = 5
// let b = 7

// function add(x,y) {
//     return x+y;
// }
// let result = add(a,b)
// console.log(result)


// calculator
// ----------------------

// function add(a, b) {
//     return a + b;
// }

// while (true) {

//     let choice = Number(prompt(
//         "Enter your option:\n" +
//         "1. Addition\n" +
//         "2. Subtraction\n" +
//         "3. Multiplication\n" +
//         "4. Division\n" +
//         "5. Break"
//     ));

//     if (choice == 5) {
//         break;
//     }

//     let number1 = Number(prompt("Enter your first number:"));
//     let number2 = Number(prompt("Enter your second number:"));

//     if (choice == 1) {
//         let result = add(number1, number2);
//         alert(`The result is: ${result}`);
//     }
//     else if (choice == 2) {
//         let result = number1 - number2;
//         alert(`The result is: ${result}`);
//     }
//     else if (choice == 3) {
//         let result = number1 * number2;
//         alert(`The result is: ${result}`);
//     }
//     else if (choice == 4) {
//         let result = number1 / number2;
//         alert(`The result is: ${result}`);
//     }
//     else {
//         alert("Invalid choice");
//     }
// }


// let greet = function (){
//     console.log('hello');
// }
// greet()

// let an = ()=>{
//     console.log(hello);
// }
// an()

// let a = 10;
// let b = 13;

// let sum = (a,b)=>a+b;


// built in function
// ------------------------

// console.log(Math.max(10,20,30,40))
// console.log(Math.min(10,20,30,40))
// console.log(Math.round(9.4))
// console.log(Math.ceil(9.3))
// console.log(Math.floor(9.9))
// console.log(Math.sqrt(4))
// console.log(Math.pow(2,3))
// console.log(Math.PI)
// console.log(Math.random())


// DOM:Document Object Model
// ---------------------------------------
// DOM : Document Object Model
// It is a programming interface for web documents. It represents the page so
// that programs can manipulate the structure, style and content of the webpage.
// The DOM represents the page as a tree structure, where each node corresponds to a
// part of the document (such as elements, attribute, or text)

// In simple terms, the DOM allows JS to interact with the content of a webpage


// Key concepts of DOM
// --------------------------------

// 1. Document Object
// --------------------------
//    The document object is the entry point for JavaScript to interact with
//    the HTML document. It represents the entire HTML document and gives you access
//    to everything within it, such as elements, attributes, and text.

// 2. DOM Tree Structure
// --------------------------------
//    The DOM is structured as a tree of nodes. The top-level node is the
//    document object and it branches out to various elements and other nodes.


// Accessing Elements
// ---------------------------------
// 1. getElementsByTagName
// 2. getElementsByClassName
// 3. getElementById
// 4. querySelector
// 5. querySelectorAll


// 1. getElementsByTagName
// ----------------------------------
// This method returns a live HTMLCollection of elements with the specified tag name.

// const para= document.getElementsByTagName('p');
// for (let i of para){
//     console.log(i.textContent);
// }

// 3. getElementsByClassName
// ------------------------------------
// This method returns a live HTMLCollection of elements with the specified class name.

// const para = document.getElementsByClassName('para');
// for(let i of para){
//     console.log(i.textContent);
// }

// 3. getElementById
// -------------------------------
// This method returns a reference to the first element with the specified ID.

// const para = document.getElementById('pr');
// console.log(para.textContent);

// 4. querySelector
// --------------------------------
// This method returns the first element that matches a specified CSS selector(s).
 
// console.log(document.querySelector('p'));
// console.log(para.textContent);

// 5. querySelectorAll
// -----------------------------------
// This method returns a static NodeList of all elements that match a specified CSS selector(s).

const para1 = document.querySelectorAll('p');
for (let i of para1){
    console.log(i.textContent);
}


// Methods for modifying elements
// -----------------------------------


// 1.InnerHTML: This property allows you to get or set the HTML content of an element. It can be used to change the content of an element dynamically.
// 2.TextContent: This property allows you to get or set the text content of an element. It is useful for changing the visible text without affecting the HTML structure.
// 3.InnerText: Similar to textContent, this property allows you to get or set the visible text of an element. However, it takes into account the CSS styles applied to the element, so it may not include hidden text.

// const para = document.getElementById('pr');
// console.log(para.textContent);
// para.textContent = 'Good Evening'

// const para =document.querySelector('.main');
// para.innerHTML = '<p>Hello how are you?</p>

