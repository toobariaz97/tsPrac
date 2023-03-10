"use strict";
//why typeScript?
/*
typescript is a OOP javaScript,
TypeScript can easy handle large scale of application , while javascript is mostly used
for interactive web pages.TS is typed language that means it is a strict type language as
we studied in c,C#,c++ programming languages.JS is a looselt typed Language
the additional feature in TS is classes,constructor,Enum,interfaces,type annotations.
//Topic to be cover
1- types: strict data types
2- class: work with classes like oop concepts
3-interface:
4-tuple
5
*/
Object.defineProperty(exports, "__esModule", { value: true });
// function addition(a: string, b: string) {
//   return a + b;
// }
// console.log(addition("Tooba", "Riaz"));
// let v:any=true;
// v="Techlabs";
// console.log(v);
// let w:unknown=1;
// w="New String"
// w={
//     runANonExistentMethod:()=>{
//         console.log("I am here");
//     }
// }as {
//     runANonExistentMethod:()=>void
// }
// if(typeof w==="object" && w!==null)
// {
//     (w as{runANonExistentMethod:Function}).runANonExistentMethod();
// }
// export {}
//class
class App {
    addition() {
        console.log("I am a function inside class");
    }
}
class Car {
    display(color) {
        return color;
    }
}
let a = new App();
a.addition();
let car = new Car();
car.display("red");
let arr = [1, 3, "Tooba"];
let arr1 = ["Tooba", "Riaz"];
let persons = ["a", "b", "c", "d"];
persons.sort();
console.log(persons);
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push("Sending a new string");
let newTuple;
newTuple = ["new string", false];
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let p1 = new Person("Tooba");
console.log(p1.getName());
const carYear = 2011;
const carModel = "Honda";
const carName = "Alto";
const carType = "Manual";
const cars = {
    type: carType,
    year: carYear,
    name: carName,
    model: carModel
};
console.log(cars);
const rectangle = {
    height: 20,
    widht: 10
};
console.log(rectangle);
let user = {
    name: "Tooba",
    age: 22
};
let userss = {
    name: "Tooba",
    age: 22,
    getInfo: function () {
        return { name: this.name, age: this.age };
    }
};
console.log(userss.getInfo());
class pizzaMaker {
    create(event) {
        return event.name + event.size;
    }
}
const pizza = new pizzaMaker();
const value = pizza.create({ name: "Arabian", size: 20 });
console.log(value);
