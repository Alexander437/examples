var myJsVariable = "Hello";
let blockVariable = 123;
const constVariable = "I'm a constant";

console.log(typeof("123"));  // `number`, `boolean`, `string`, `object`. `function`, `null`, `undefined` (лучше `null`)
eval("alert('Hello')")

function print(message) {
    console.log(message);
}

print("Hello!")

f1 = () => true

// class
class Human {
    constructor(name, age) {
        if (typeof(name) != "string") throw new Error("Provided name isn't STRING!");

        this.Name = name;
        this.Age = age;
    }

    hello() {
        alert(`Hello, I'm ${this.Name}`);
    }
}

class Student extends Human {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log("I'm studying")
    }
}

function Person(name, borth) {
    this.Name = name;
    this.borth = borth;

    this.age = function() {
        debugger;
        return new Date((Date.now() - this.borth)).getFullYear;
    }
}

let p = new Person("Ivan", new Date("2020.01.01"));
p.age();

// Closure
// Если мы не хотим, чтобы можно было присвоить Outer.count = null
// мы должны делать так: (из InnerFunction нельзя менять count)
function Outer() {
    let count = 123;

    return function () {
        debugger;
        return count++;
    }
}

let InnerFunction = Outer()
InnerFunction()
InnerFunction()

// Promise
var response = await fetch("data.json")
let jsonObj = await response.json()
// response.json().then((jsonObj) => console.log(jsonObj));

Promise.resolve(123).then((d) => console.log(d))
Promise.reject(123).catch((d) => console.log(d))

