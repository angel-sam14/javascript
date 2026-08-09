// 1. Add number(a,b)
// -------------------------------

// function addNumbers(a, b) {
//     return a + b;
// }
// console.log(addNumbers(10, 20));


// 2.Even number
// ------------------------

// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(8));
// console.log(isEven(7));


// 3.Celicious to Fahrenheit
// ------------------------------

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// console.log(celsiusToFahrenheit(25));


// 4.Greet(name)
// -------------------------

// function greet(name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet("Angel"));


// 5.Max(a,b)
// -----------------------------

// function findMax(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(findMax(15, 20));

// 6.Factorial(n)
// ----------------------------

// function factorial(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }

//     return fact;
// }

// console.log(factorial(5));


// 7.CountVowels(str)
// ----------------------------

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello"));


// 8.Is palindrome(str)
// -----------------------------

// function isPalindrome(str) {
//     let reverse = str.split("").reverse().join("");

//     return str === reverse;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));


// 9.Sum array(arr)
// ------------------------------

// function sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(sumArray([10, 20, 30, 40]));


// 10.Has property(obj, prop)
// -------------------------------

// function hasProperty(obj, prop) {
//     return obj.hasOwnProperty(prop);
// }

// let student = {
//     name: "Angel",
//     age: 21
// };

// console.log(hasProperty(student, "name"));
// console.log(hasProperty(student, "mark"));


// Events
// // -----------------------------

// document.getElementById("img1").addEventListener("mouseover", () => {
//     document.getElementById("displayImage").src = "img.png";
// });

// document.getElementById("img2").addEventListener("mouseover", () => {
//     document.getElementById("displayImage").src = "css.png";
// });

// document.getElementById("img3").addEventListener("mouseover", () => {
//     document.getElementById("displayImage").src = "img2.png";
// });

// -------------------------------------------------------------------------------------------

// 
// 1.FAQ section
// -------------------


// let question = document.getElementById("question");
// let answer = document.getElementById("answer");

// answer.style.display = "none";

// question.addEventListener("click", () => {
//     if (answer.style.display === "none") {
//         answer.style.display = "block";
//     } else {
//         answer.style.display = "none";
//     }
// });


// 2.circle
// ------------------------

// let circle = document.getElementById("circle");

// document.addEventListener("mousemove", (event) => {
//     circle.style.left = event.clientX + "px";
//     circle.style.top = event.clientY + "px";
// });



// 3.tooltip on hover
// ------------------------------

// let btn = document.getElementById("btn");

// btn.addEventListener("mouseover", () => {
//     btn.title = "This is a tooltip";
// });


// 4.show/hide
// -------------------

// let btn = document.getElementById("btn");
// let content = document.getElementById("content");

// btn.addEventListener("click", () => {
//     if (content.style.display === "none") {
//         content.style.display = "block";
//     } else {
//         content.style.display = "none";
//     }
// });


// 5.Button hover animation
// ----------------------------------

// let btn = document.getElementById("btn");

// btn.addEventListener("mouseover", () => {
//     btn.style.transform = "scale(1.2)";
//     btn.style.backgroundColor = "pink";
//     btn.style.color = "red";
// });

// btn.addEventListener("mouseout", () => {
//     btn.style.transform = "scale(1)";
//     btn.style.backgroundColor = "";
//     btn.style.color = "";
// });


// 6.character counter
// -----------------------------

// let text = document.getElementById("text");
// let count = document.getElementById("count");

// text.addEventListener("input", () => {
//     count.textContent = text.value.length;
// });


// 7.parallax effect
// -------------------------

// let box = document.getElementById("box");

// document.addEventListener("mousemove", (event) => {

//     let x = event.clientX / 5;
//     let y = event.clientY / 5;

//     box.style.transform = `translate(${x}px, ${y}px)`;
// });


// 8.image zoom model
// --------------------------------

// let image = document.getElementById("image");
// let modal = document.getElementById("modal");
// let largeImage = document.getElementById("largeImage");
// let close = document.getElementById("close");

// image.addEventListener("click", () => {
//     modal.style.display = "block";
//     largeImage.src = image.src;
// });

// close.addEventListener("click", () => {
//     modal.style.display = "none";
// });


// 9.dynamic content
// ----------------------------------


// let btn = document.getElementById("btn");
// let content = document.getElementById("content");

// btn.addEventListener("click", () => {
//     content.textContent = "Content changed successfully!";
// });


// 10.modal window
// ------------------------

let openBtn = document.getElementById("openBtn");
let modal = document.getElementById("modal");
let close = document.getElementById("close");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});