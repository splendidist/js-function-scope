console.log("Hello world!");

//Accessing variables in the parent scope

const myName = "Lucy"; //this is a global variable as it can be used anywhere

function sayHello() {
  console.log("Hello " + myName + "!");
}

sayHello(); //Output: "Hello Lucy!"
console.log(myName); //Output: "Lucy"

//Creating variables in the function scope

function sayGoodbye() {
  const catName = "Misty"; //this is a scoped variable as it is scoped to the function and can only be used within this function
  console.log("Goodbye " + catName + "!");
}

sayGoodbye(); //Output: "Goodbye Misty!"

console.log(catName); //Output: "Uncaught ReferenceError: catName is not defined"

// Variables that are only scoped within a function can be forgotten, saving memory.
//If we only used global variables, we could never clear anything up behind us.

//It's worth noticing that with scoped functions you can reuse variables within functions
//without worrying about pollution or functions affecting other. Global scoped variables
//used within more than one function could lead to conflicts and unexpected results, as
//both functions might try to alter the global variable at the same time.
