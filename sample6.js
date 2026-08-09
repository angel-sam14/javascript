// 4-8-26

// const content =document.createElement('div');
// content.innerHTML = "<h1 class = 'head1'> create elements</h1> <p>we can create and append elements using DOM methods</p>";
// content.setAttribute('class','head1');

// document.getElementById('section1').appendChild(content);
// content.style.display ="flex";
// content.style.alignItems="center";
// const image = document.createElement('img');    
// image.src="css.png";
// image.style.width = "100x";
// image.style.height = "100px";
// document.body.append(image);
// console.log(image);
// const p1 = document.querySelector('#para1');
// console.log(p1)
// p1.remove();

// const list = document.querySelector('ul')
// const listitem = docuument.querySelector('li')
// const newListItem = document.createElement('li');
// newListItem.textContent ="Grapes";
// console.log();
// list.replaceChild(newListItem,listitem,list,firstlementChild);

// console.log(listitem.parentElement);
// console.log(list.childElementCount);
// console.log(listitem.parentNode);
// console.log(listitem.nextElementSibling);
// console.log(listitem.previousElementSibling);


// listitem.classList.remove('list');
// console.log(list.classList)
// list.classList.toggle('dark');

// 5-8-26

// Events
// --------------

// 3-types

// 1.mouse events
    // click
    // dbclick
    // mouseenter
    // mouseleave
    // mouseover
    // mouseout
    
// 2.keyboard events
    //  keyup
    // keydown

    // 3.form events
    // change
    // input
    // submit   
    // focus

// function greet(){
    // document.body.innerHTML += "<h1> Hello </h1>"
// }
// document.getElementById('btn').addEventListener('event',callback)

// document.getElementById('login-btn').addEventListener('click',()=>{
    // alert('login successful')
// });

// const loginbtn = document.getElementById('login-btn');
// loginbtn.addEventListener('click',(event)=>{
    // event.preventDefault();
   // console.log(event.target.innerHTML);
    // event.target.innerHTML = "logout";
//});
// loginbtn.addEventListener('click',greet);
// loginbtn.removeEventListener('click',greet);


// 1.Mouse events
// ---------------------

// document.getElementById('container1').addEventListener('mouseover',(event)=>{
//     console.log(event.target.innerHTML);
//     document.getElementById('container2').style.backgroundColor = "hsl(120, 100%, 50%)";
// });
// document.getElementById('container1').addEventListener('mouseleave',(event)=>{
//     console.log(event.target.innerHTML);
//     document.getElementById('container2').style.backgroundColor = "hsl(300, 14%, 33%)";
// });
// document.getElementById('container1').addEventListener('mousedown',(event)=>{
//     console.log(event.target.innerHTML);
//     document.getElementById('container2').style.backgroundColor = "hsl(240, 100%, 50%)";
// });

// document.getElementById('login-btn').addEventListener('click',(event)=>{
//     event.preventDefault()
//     console.log(event.target.innerHTML)
//     event.target.innerHTML = "logout"
// })
// document.getElementById('login-btn').addEventListener('click',greet)

// 6/8/26

// 2 types of javascript
// -------------------------

// 1.asynchronous js:at a time multiple tasks can be executed and the next task can be executed without waiting for the previous task to complete. It allows for non-blocking operations, enabling better performance and responsiveness in web applications.
// 2.synchronous js:at a time only one task is executed and the next task will be executed only after the previous task is completed. It can lead to blocking of the main thread, causing delays in user interactions and responsiveness.
// event loop:is a core mechanism in javascript that allows it to handle asynchronous operations and manage the execution of code in a non-blocking manner. It enables javascript to perform tasks like handling user interactions, making network requests, and executing timers without freezing the main thread. The event loop continuously checks the call stack and the task queue, ensuring that tasks are executed in the correct order and allowing for efficient multitasking in web applications.

// asynchronous js
// -------------------------


// console.log('Hello 1');
// setTimeout(()=>{
//     for(let i=1;i<=le9;i++){}
//         console.log('completed')
//     })
// console.log('Hello 2');
// console.log('Hello 3');

// color changing using settimeout
// --------------------

// const heading = document.getElementById("Message");
// heading.setAttribute("style", "color: red;");

// setTimeout(function()  {
//     heading.setAttribute("style", "color: pink;");
// }, 5000);

// 1.syntax:setTimeout(callbackfunction,delay in millisecond)
// 2.setinterval(callbackfunction,delay in millisecond)
// ----------------------------------------------------------
// 1.
// const heading = document.getElementById('heading1')
// const btn = document.getElementById('btn')
// const p = document.getElementById('p')

// let change =setTimeout(() => {
//     heading.setAttribute('style','color:green')
// }, 5000);

// btn.addEventListener('click',()=>{
//     clearTimeout(change);
//     p.textContent='Timer stopped'
// })

// 2.
// let i = 0;
// let p = document.getElementById('p')
// let btn = document.getElementById('btn')
// const int = setInterval(() => {
//     i++;
//     p.textContent = i;
// }, 1000);

// btn.addEventListener('click',()=>{
//     clearInterval(int);
//     p.textContent='stopped'
// })


// click the button

let content = document.getElementById("content");
let timer = document.getElementById("timer");
let btn = document.getElementById("btn");

let count = 5;

let interval = setInterval(() => {
    count--;
    timer.textContent = count;

    if (count === 0) {
        clearInterval(interval);
        content.innerHTML = "The button is gone";
    }
}, 1000);

btn.addEventListener("click", () => {
    clearInterval(interval);
    timer.textContent = "Saved!";
});