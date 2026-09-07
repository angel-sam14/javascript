// CLASSES
// ---------

// class Emp {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const emp = new Emp("Aman", "25 years");
// console.log(emp.name);
// console.log(emp.age);
// o/p:Aman
// 25 years
// --------------------------------------------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("Alice", 30);
// console.log(p1.name);
// console.log(p1.age);

// const p2 = new Person("Bob", 25);
// console.log(p2.name);
// console.log(p2.age);
// o/p:Alice
// 30
// Bob
// 25
// -------------------------------------------------------
// OBJECTS
// --------

// let person = {
//   first_name: 'Mukul',
//   last_name: 'Latiyan',
//   getFunction: function () {
//     return (
//       `The name of the person is
//       ${person.first_name}
//       ${person.last_name}`
//     )
//   },
//   phone_number: {
//     mobile: '12345',
//     landline: '6789'
//   }
// }

// console.log(person.getFunction());
// console.log(person.phone_number.landline);
// o/p:The name of the person is
//       Mukul
//       Latiyan
// 6789
// -----------------------------------------------
// function person(first_name, last_name) {
//   this.first_name = first_name;
//   this.last_name = last_name;
// }

// let person1 = new person('Mukul', 'Latiyan');
// let person2 = new person('Rahul', 'Avasthi');

// console.log(person1.first_name);
// console.log(
//   `${person2.first_name} ${person2.last_name}`
// );
// o/p:Mukul
// Rahul Avasthi
// -------------------------------------------------------
// const coder = {
//   isStudying: false,
//   printIntroduction: function () {
//     console.log(
//       `My name is ${this.name}.
//       Am I studying?: ${this.isStudying}.`
//     )
//   }
// }

// const me = Object.create(coder);
// me.name = 'Mukul';
// me.isStudying = true;
// me.printIntroduction();
// o/p:My name is Mukul.
    //   Am I studying?: true.
// ----------------------------------------------
// GETTER and SETTER
// ------------------

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     const parts = name.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// console.log(person.fullName);  // "John Doe"
// person.fullName = "Jane Smith";
// console.log(person.firstName); // "Jane"
// console.log(person.lastName);  // "Smith"
// o/p:John Doe
// Jane
// Smith
// -------------------------------------------------\
// const temperature = {
//   _celsius: 0,
//   get fahrenheit() {
//     return this._celsius * 1.8 + 32;
//   },
//   set fahrenheit(value) {
//     this._celsius = (value - 32) / 1.8;
//   },
// };

// console.log(temperature.fahrenheit); // 32
// temperature.fahrenheit = 68;
// console.log(temperature._celsius);   // 20
// o/p:32
// 20
// --------------------------------------------------

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a sound.`);
// };

// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const d = new Dog("Rex");
// d.speak(); 
// o/p:Rex makes a sound.
// ------------------------------------------------
// INHERITANCE
// ------------

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const d = new Dog("Rex");
// d.speak(); 
//o/p: Rex barks.
// --------------------------------------------------------
// ENCAPSULATION
// ---------------

// class BankAccount {
//   #balance; // Private field

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     if (amount > 0) this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const acc = new BankAccount(1000);
// acc.deposit(500);
// console.log(acc.getBalance()); 
//o/p: 1500
// acc.#balance → SyntaxError
// ---------------------------------------------------
// ABSTRACTION
// ------------

// class CoffeeMachine {
//   #waterLevel = 0;

//   #heatWater() {
//     console.log("Heating water...");
//   }

//   #brewCoffee() {
//     console.log("Brewing coffee...");
//   }

//   makeCoffee() {
//     this.#heatWater();
//     this.#brewCoffee();
//     console.log("Coffee ready!");
//   }
// }

// const machine = new CoffeeMachine();
// machine.makeCoffee();
//o/p: Heating water...
// Brewing coffee...
// Coffee ready!
// ----------------------------------------------
// POLYMORPHISM
// ---------------------
// class Shape {
//   area() {
//     return 0;
//   }
//   describe() {
//     console.log(`Area: ${this.area()}`);
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Rectangle extends Shape {
//   constructor(w, h) {
//     super();
//     this.width = w;
//     this.height = h;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }

// const shapes = [
//   new Circle(5),
//   new Rectangle(4, 6)
// ];

// shapes.forEach(s => s.describe());
//o/p: Area: 78.539...
// Area: 24







