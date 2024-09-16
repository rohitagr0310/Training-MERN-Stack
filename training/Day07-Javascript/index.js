"use strict";
//NOTE USE STRICT MODE ;

// age = 5 ;
// console.log(age)

// function sum(a,a,b){
//     return a+a+b ;
// }

// console.log(sum(1,2,3))

//NOTE TYPE OF CONSOLE ;

console.error("this is an error");
console.warn("this is a warning");

//using console.time you can calculate the time of any operation
console.time("timeStamp");
console.log("hello");
console.timeEnd("timeStamp");

//NON PRIMITIVE DATA TYPES ;

const fruits = ["mango", "papaya", "grapes", "guava", "orange"];
console.log(fruits.length); //5
//last index 4 ; 5-1
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//NOTE PUSH METHOD
//REVIEW - ADD AN ELEMENT TO THE END OF THE ARRAY ,
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY
//REVIEW IT MUTATES THE ORIGINAL ARRAY
const pushOutput = fruits.push("blueberry");

console.log(pushOutput);
console.log(fruits);

//NOTE POP METHOD :
//REVIEW - used to remove element from the last
//REVIEW - always returns the popped or deleted element
//REVIEW - always mutates the original array
const output = fruits.pop();
console.log(output);
console.log(fruits);

//NOTE 3 UNSHIFT METHOD
//REVIEW used to add element to the starting of the array
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY
//REVIEW IT MUTATES THE ORIGINAL ARRAY

const unshiftOutput = fruits.unshift("pomengranate");

console.log(unshiftOutput);
console.log(fruits);

//NOTE SHIFT METHOD
//REVIEW - Remove the element from the start of the array
const shiftOutput = fruits.shift();
console.log(shiftOutput);
console.log(fruits);

//NOTE INCLUDES METHOD
//REVIEW - Check element is exists in an array , returns true or false ;
const includesOutput = fruits.includes("blueberry");
console.log(includesOutput);

//NOTE ----------- OBJECTS -----------
// key:value
const myDetails = {
  firstName: "ritesh",
  age: 2024 - 1997,
  "two hundred": 200,
};
// console.log(myDetails.two hunderd)
console.log(myDetails["two hundred"]);
console.log(myDetails);
//update a keyvalue in the object
//NOTE DOT NOTATION
myDetails.firstName = "abc";
console.log(myDetails);

//NOTE to add a new property ;
myDetails.friend = "xyz";
console.log(myDetails);

//DOT NOTATION ;
console.log(myDetails.firstName);
console.log(myDetails.friend);

//Bracket notation
let a = "age";
console.log(myDetails["firstName"]);
console.log(myDetails[a]);

