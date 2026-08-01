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


function add(a, b) {
    return a + b;
}

while (true) {

    let choice = Number(prompt(
        "Enter your option:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Break"
    ));

    if (choice == 5) {
        break;
    }

    let number1 = Number(prompt("Enter your first number:"));
    let number2 = Number(prompt("Enter your second number:"));

    if (choice == 1) {
        let result = add(number1, number2);
        alert(`The result is: ${result}`);
    }
    else if (choice == 2) {
        let result = number1 - number2;
        alert(`The result is: ${result}`);
    }
    else if (choice == 3) {
        let result = number1 * number2;
        alert(`The result is: ${result}`);
    }
    else if (choice == 4) {
        let result = number1 / number2;
        alert(`The result is: ${result}`);
    }
    else {
        alert("Invalid choice");
    }
}


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