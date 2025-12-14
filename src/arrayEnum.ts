// Arrays in TypeScript

// Arrays allow multiple values of the same type.

// Example of an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Example of an array of strings
let fruits: string[] = ['apple', 'banana', 'cherry'];

// Example of an array of booleans
let bools: boolean[] = [true, false, true];

// Example of a mixed array using union types
let mixedArray: (number | string | boolean)[] = [1, 'two', true, 3, 'four', false];

// Accessing array elements
let firstNumber: number = numbers[0]!; // 1
let firstFruit: string = fruits[0]!; // 'apple'

// Adding elements to an array
numbers.push(6); // numbers is now [1, 2, 3, 4, 5, 6]

// Iterating over an array
for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// cherry

// Example of using an array with a custom type
type Person = {
    name: string;
    age: number;
};

let people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];

// Accessing properties of objects in the array
let firstPersonName: string = people[0]!.name; // 'Alice'       

// Iterating over the array of objects
for (let person of people) {
    console.log(`${person.name} is ${person.age} years old.`);
}

// Output:
// Alice is 30 years old.
// Bob is 25 years old.

// tuples in TypeScript

// Tuples allow you to define an array with a fixed number of elements of specific types.

// Example of a tuple
let tuple: [number, string, boolean] = [1, 'hello', true];

// Accessing tuple elements
let tupleNumber: number = tuple[0]; // 1
let tupleString: string = tuple[1]; // 'hello'
let tupleBoolean: boolean = tuple[2]; // true

// Adding elements to a tuple (not recommended as it breaks the fixed structure)
tuple.push(42); // Now tuple is [1, 'hello', true, 42]

// Iterating over a tuple
    for (let element of tuple) {
    console.log(element);
}

// named tuple elements
let namedTuple: [id: number, name: string, isActive: boolean] = [1, 'John Doe', true];
let userId: number = namedTuple[0]; // 1
let userName: string = namedTuple[1]; // 'John Doe'
let userIsActive: boolean = namedTuple[2]; // true

// enums in TypeScript
// Enums allow you to define a set of named constants.

// Example of a numeric enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up; // 1

// Example of a string enum
enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
}

let favoriteColor: Color = Color.Green; // 'GREEN'

// incremental property of enums
enum Status {
    New,        // 0
    InProgress, // 1
    Completed   // 2
}

let currentStatus: Status = Status.InProgress; // 1