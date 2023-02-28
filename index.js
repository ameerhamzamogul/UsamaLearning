// import { add, divide } from "./Math";


//AmigosCode

// Variable
// var name = "Marie Jones";
// var age = 12;
// var hasDriverLicense = true;
// var empty = undefined;

// document.write(name + " type= " + typeof name + " ");
// document.write(age + " type= " + typeof age + " ");
// document.write(hasDriverLicense + " type= " + typeof hasDriverLicense + " ");
// document.write(empty + " type= " + typeof empty);

//Objects

// var person = {
//     name: "Marie Jones",
//     age: 20,
//     hasDriverLicense: true,
//     date: new Date().toLocaleTimeString(),
//     address: {
//         country: "Pakistan",
//         city: "Lahore",
//         code: 521
//     }
// }
// document.write(JSON.stringify(person));
// document.write(person.name);
// document.write(person.age);
// document.write(person.hasDriverLicense);
// document.write(JSON.stringify(person.address))
// document.write(Object.values(person));

//Arrays

// var name = " marie jones";
// var names = ["marie", "jones", "lahore", 41, undefined]
// console.log(names[0])
// document.write(names[1])
// console.log(names.length)
// for (var n of names) {
//     console.log(n)
// }

// names.forEach(function (n, index) {
//     console.log(index + " : " + n)
// })

// function addNumbers(n1, n2) {
//     console.log((n1 + n2) / 2);
// }
// addNumbers(2, 4);
// console.log(Object.keys({
//     name: "john",
//     age: 18
// }))

// document.write(Object.keys({
//     name: "john",
//     age: 18
// }))

// console.log(Object.values({
//     name: "john",
//     age: 15
// }))

// console.log("Marie Jones".toLowerCase());
// console.log("Marie Jones".toLowerCase());
// console.log("Marie Jones".endsWith("Jones"));
// console.log("Marie Jones".startsWith("marie"));

//Loops

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// var persons = [
//     { name: "marie", age: 15, subject: "computer" },
//     { name: "jones", age: 19, subject: "biology" }
// ];

// for (var i = 0; i < persons.length; i++) {
//     console.log(persons[i]);
//     console.log(persons[i].name);
//     console.log(persons[i].age);
//     console.log(persons[i].subject);
//     console.log("----------")
// }
// for (var n of persons) {
//     console.log(n)
// }

//While

// var number = 0;
// while (number < 6) {
//     console.log(number);
//     if (number == 3) {
//         break;
//     }
//     number++;
// }

// var i = 0;
// do {
//     i++;
//     console.log(i)
// } while (false);


//If Statement

// var person = {
//     name: "anna",
//     age: 16
// }

// if (person.age > 18) {
//     console.log(person.name + " is an adult");
// }

// else if (person.age == 17) {
//     console.log(person.name + " is about to an adult")
// } else {
//     console.log(person.name + " is not an adult")
// }

// Switch Statement

// switch (true) {
//     case (person.age >= 18):
//         console.log("You are an adult now");
//         break;
//     case (person.age == 17):
//         console.log("You are about to an adult");
//     default:
//         console.log(person.name + " is not an adult now");
// }

// switch (new Date().getDay()) {
//     case 4:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Saturday");
//     default:
//         console.log("I dont know");

// }

//Comparion and Logical Operators
// console.log("Comparison operator")
// console.log(10 == 10);
// console.log(10 < 10);
// console.log(10 != 10);
// console.log(10 > 10);
// console.log(10 <= 10);

// console.log("Logical Operator")
// console.log(10 == 10 && 20 == 20)
// console.log(10 == 10 || 20 == 10)
// console.log(!(10 == 10))

//Equality without type coercion and 3 equal sign
// console.log("with type coercion")
// console.log(typeof 0 + " " + typeof false);
// console.log(0 == false);

// console.log("without type coercion")
// console.log(typeof 0 + " " + typeof false);
// console.log(0 === false);

//MAP | FILTER | REDUCE
// console.log("Map method")
// var map = [1, 2, 3, 4, 5].map(function (n) {
//     return n * 2;
// })
// console.log(map)

// console.log("[].Filter");
// var filter = [1, 2, 3, 4, 5, 6].filter(function (n) {
//     return n % 2 == 0;
// })
// console.log(filter)

// console.log("[].reduce");
// var reduce = [1, 2, 3, 4, 5].reduce(function (accumulator, current) {
//     return accumulator + current;
// })
// console.log(reduce)

// console.log("Callbacks")
// function callBackExample(name, callback) {
//     console.log(callback(name));
// }
// var callback = function (name) {
//     return "Hello " + name
// }
// callBackExample("Abel Mohammad", callback);


// console.log(Math.add(2, 2));

// const array = [];
// array.push("You are intelligent");
// console.log(array[0]);

// const name = 'Ali';
// const age = 18;
// const city = "lahore";

// console.log(`name: ${name} age: ${age} city: ${city}`)


// const arrayOne = ["ali", "usama", "shoaib"];
// const arrayTwo = ["muzammil", "rehman", "abubakar"]

// const concatArray = [...arrayOne, ...arrayTwo]
// concatArray.forEach(function (name) {
//     console.log(name)
// })

// const name = "marie";
// const nametoArray = [...name]
// nametoArray.forEach(function (letter) {
//     console.log(nametoArray)
// })


//Spread operator

// let arr1 = [3, 5, 8];
// let obj1 = { ...arr1 };
// console.log(obj1)

//Arrow functions

// const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index))
// console.log(powers);

// const milesToKm = (miles) => miles * 1.60934;

// console.log(milesToKm(100))

//This
// let counter = createCounter();
// let counter1 = createCounter();

// function createCounter() {
//     return {
//         count: 0,
//         increment: function () {
//             this.count++;
//         }
//     }
// }


//Even and Odd Number

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (var a = 1; a <= 10; a++) {
//     if (a % 2 != 0) {
//         document.write(a + "<br>")
//     }
// }






// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1);


//Enhanced object properties

// const pricePropName = "PRICE";

// const calculator = (name, price) => {
//     return {
//         name,
//         add(n1, n2) {
//             return n1 + n2;
//         },
//         [pricePropName.toLowerCase()]: price
//     }
// }
// const calc = calculator('casio', 19.99)
// console.log(calc.name)
// console.log(calc.add(10, 20));
// console.log(calc.price);

// Array Descruturing

// const names = ['Anna', 'Marie', 'joe', 'mark', 'julie'];
// const [anna, marie, ...restOfNames] = names;

// console.log(`${anna} ${marie}`)
// console.log(restOfNames.length);

//  Function default parameters

// const calculatePay = (yearSalray, bonus = {
//     teamBonus: 0,
//     employeeBonus: 0
// }) => { return yearSalray + bonus.teamBonus + bonus.employeeBonus };
// console.log(calculatePay(1000, { teamBonus: 2000, employeeBonus: 6000 }));



// // Classes

// class Animal {
//     constructor(name, age) {
//     }
// }

// Promises and feth Api

// const getRandomUsers = n => {
//     const fetchRandomUsers = fetch(`https://randomuser.me/api/?results`)
//     fetchRandomUsers.then(data => {
//         data.json().then(randomUsers => {
//             console.log(JSON.stringify(randomUsers.results.length));
//             randomUsers.results.forEach(user => {
//                 const { gender, email } = user;
//                 console.log(`${gender} - ${email}`)
//             });
//         })
//     })
// }

// getRandomUsers(100);

// Generator

// const getNumber = function* () {
//     yield 1;
//     yield "hello";
//     yield true;
//     yield { name: "Ali" };
//     return " i am done";
// }

// const numberGen = getNumber();

// console.log(numberGen.next().value);
// console.log(numberGen.next().value);
// console.log(numberGen.next().value);
// console.log(JSON.stringify(numberGen.next().value));
// console.log(numberGen.next().value)


//  Iterators

// let numbers = "Usama Anwar"
// let iter = numbers[Symbol.iterator]();
// let result = iter.next();
// while (!result.done) {
//     console.log(result.value)
//     result = iter.next();
// }


// if (window.localStorage) {
//     console.log("the localstorage is supported")
// }
// var message = "Hello World";
// console.log(message);

// let counter = 120;
// console.log(typeof (counter));

// let counters;
// console.log(typeof (counters));

// let obj = null;
// console.log(typeof (obj))

// console.log(null == undefined);

// let price = 12.5;
// console.log(price);

// let str = 'javascript';
// str = str + ' string'
// console.log(str);

// let s = 'JavaScript';
// s[0] = 'j';
// console.log(s)

// let pageView = 900212331222n;
// console.log(typeof (pageView));


// let contact = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phone: '92 33 44 999',
//     address: {
//         building: '4000',
//         street: 'gulberg street',
//         city: 'lahore',
//         state: 'punjab',
//         country: 'pakistan'
//     }
// }
// console.log(contact['email'])
// console.log(contact.firstName);
// console.log(contact.address.street);

// let num = 071;
// console.log(num)

// let nums = 080;
// console.log(nums)

// let num = 0x1a;
// console.log(num)

// let num = 0x0a;
// console.log(num)

// let amount = 3.14e1;
// console.log(amount)

// let amount = 3.14e-2;
// console.log(amount)



// function greet(name, greetText) {
//     console.log(greetText + " " + name)
// }
// let greetText = "Good Morning";
// let name = "usama";
// let name1 = "umair";

// greet(name, greetText);
// greet(name1, greetText)
// alert("This is an alert");

// let name = prompt("What is your name", "");

// console.log(name);

// let deletePost = confirm("Do you really want to delete this post?");

// if (deletePost) {
//     console.log("your post has been deleted successfully")
// } else {
//     console.log("your post has not been deleted")
// }

// let friends = ["Shoaib", "Rehman", "Abubakar", "Muzammil", "Ali"];

// for (let i = 0; i < friends.length; i++) {
//     console.log("Hello " + friends[i]);
// }

// friends.forEach(function f(element) {
//     console.log("Hello " + element + " to modern javascript");
// })

// for (element of friends) {
//     console.log("Hello " + element + " to new modern javascript");
// }
// let employee = {
//     name: "usama",
//     skill: "Blockchain",
//     language: "Solidity"
// }

// for (key in employee) {
//     console.log(`The ${key} of employee is ${employee[key]} `);
// }

// let i = 0;

// while (i < 5) {
//     console.log(`${i} is less than 5`);
//     i++;
// }