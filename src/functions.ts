// Basic Function Typing
function add(a: number, b: number): number {
  return a + b;
}

// Optional and Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Rest Parameters
function multiply(factor: number, ...numbers: number[]): number[] {
  return numbers.map(num => num * factor);
}

// Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

// Arrow Functions with Type Annotations
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

// Function Type Aliases
type StringModifier = (input: string) => string;

const toUpperCase: StringModifier = (input) => input.toUpperCase();
const toLowerCase: StringModifier = (input) => input.toLowerCase();

// Generic Functions
function identity<T>(arg: T): T {
  return arg;
}       

// void Return Type
function logMessage(message: string): void {
  console.log(message);
}

// union Return Type
function parseInput(input: string): number | string {
  const parsed = Number(input);
  return isNaN(parsed) ? input : parsed;
}

// Never Return Type
function throwError(message: string): never {
  throw new Error(message);
}

// Example Usage
console.log(add(2, 3)); // 5
console.log(greet("Alice")); // Hello, Alice!
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
console.log(combine("Hello, ", "World!")); // Hello, World!
console.log(combine(5, 10)); // 15
console.log(divide(10, 2)); // 5
console.log(toUpperCase("hello")); // HELLO
console.log(identity<number>(42)); // 42
logMessage("This is a log message.");
// throwError("This is an error message."); // Uncommenting this line will throw an error