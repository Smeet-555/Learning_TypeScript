// What is an Interface?

    // An interface defines the structure (contract) of an object, class, or function

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Smeet",
  isActive: true
};

// TypeScript enforces:

//     Required properties
//     Correct property types
//     No missing fields


// Optional & Readonly Properties
interface Product {
  readonly id: number;
  name: string;
  price?: number;
}

const p: Product = { id: 101, name: "Laptop" };
// p.id = 102  // not allowed


// Interface for funciton
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;


// Interfaces for Classes
interface Auth {
  login(email: string, password: string): boolean;
}

class AuthService implements Auth {
  login(email: string, password: string): boolean {
    return email === "admin@test.com";
  }
}

// Interface Extension
interface BaseEntity {
  id: number;
}

interface User extends BaseEntity {
  name: string;
}

// const u: User = { id: 1, name: "Smeet" };


// Interface Merging
interface Config {
  port: number;
}

interface Config {
  host: string;
}

const cfg: Config = {
  port: 3000,
  host: "localhost"
};


// GENERICS

// Generic Function
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Hello");


// Generic Arrays
function getFirst<T>(arr: T[]): T {
  return arr[0]!;
}

getFirst<number>([1, 2, 3]);
getFirst(["a", "b"]);
