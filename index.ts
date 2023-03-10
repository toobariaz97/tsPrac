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

// let msg: string = "hello world";
// console.log(msg);

import { type } from "os";

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
class App{
    addition(){
        console.log("I am a function inside class");
        
    }
}

class Car{
    display( color:string) {
        return color
    }
}

let a= new App();
a.addition();
let car= new Car();
car.display("red")

let arr=[1,3,"Tooba"]
let arr1:string[]=["Tooba","Riaz"]
let persons:string[]=["a","b","c","d"];

persons.sort()
console.log(persons);



// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push("Sending a new string")

let newTuple:readonly[string,boolean];
newTuple=["new string",false]


class Person {
  public constructor ( private name:string){
    
  }
public getName(){
    return this.name;
}
}
let p1= new Person("Tooba");
console.log(p1.getName());

// console.log(p1.Person("Tooba","Urdu",12));


//alias
//what is Alias?
type CarOfYear=number;
type CarType=string;
type CarModel=string;
type CarName=string;

type Cars={
    type:CarType,
    model:CarModel,
    year:CarOfYear,
    name:CarName
}

const carYear:CarOfYear=2011;
const carModel:CarModel="Honda";
const carName:CarName="Alto"
const carType:CarType="Manual"

const cars:Cars={
type:carType,
year:carYear,
name:carName,
model:carModel
}
console.log(cars);



//interface
interface Rectangle{
    height:number,
    widht :number
}

const rectangle:Rectangle={
    height:20,
    widht:10
}
console.log(rectangle);
let user:{name:string,age:number}={
name:"Tooba",
age:22
}





interface userType{
    name:string,
    age:number,
    getInfo:()=>object
}


let userss :userType={
    name:"Tooba",
    age:22,
    getInfo:function()
    {
        return {name:this.name,age:this.age}
    }
}
console.log(userss.getInfo());

interface Pizza{
    name:string,
    size:number
}
class pizzaMaker{
public create(event:Pizza)
    {
        return event.name+event.size
    }
 }
 const pizza= new pizzaMaker();
 const value= pizza.create({name:"Arabian",size:20});
 console.log(value);
 