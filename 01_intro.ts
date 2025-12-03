// TypeScript is a superset of JavaScript that adds static typing and additional features such as interfaces, type checking, generics, and more.

// TS = JS + Type System + Additional Features



// js code
// function add(a, b) {
//   return a + b;
// }

// console.log(add("10", 20)); // Output: "1020" (Bug)


// Variable with type annotation
let username: string = "Smeet";

// Function with parameter and return type
function greet(name: string): string {
  return `Welcome, ${name}!`;
}

// Using the function
console.log(greet(username));

// Uncomment the below line to see TypeScript error
// console.log(greet(123)); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
