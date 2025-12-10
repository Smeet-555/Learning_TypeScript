// Type Aliases

// A type alias creates a name for any type: primitive, object, union, function, tuple, etc.

type User = {
  id: number;
  name: string;
};


const u1: User = {
  id: 1,
  name: "Smeet"
};
console.log(u1.id); // Output: 1
console.log(u1.name); // Output: Smeet


// Interfaces

// Interfaces describe the shape of an object or class structure.
// Used heavily in TypeScript & OOP patterns.

interface User {
  id: number;
  name: string;
}

const u2: User = {
  id: 2,
  name: "Akshay"
};
console.log(u2.id); // Output: 2
console.log(u2.name); // Output: Akshay


// Type Aliases vs Interfaces:
// Both can describe objects, but they have differences.

// ✔ Similarities

// Both can:
    // describe objects
    // add readonly & optional fields
    // be extended


// Extending (Inheritance)
// Interface extends Interface

interface Animals {
  name: string;
}

interface Dogs extends Animals {
  breed: string;
}

const d: Dogs = { name: "Tommy", breed: "Labrador" };


type Animal = { name: string };
type Dog = Animal & { breed: string };

const d2: Dog = { name: "Tommy", breed: "German Shepherd" };



// Interface Merging (Very Important)
// Interfaces can merge, types cannot.

interface Users {
  id: number;
}

interface Users {
  name: string;
}

const u: Users = {
  id: 1,
  name: "Smeet"
};
console.log(u.id); // Output: 1