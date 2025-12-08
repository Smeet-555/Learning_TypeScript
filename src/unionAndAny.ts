// What is a Union Type?
    // A union type allows a variable to store more than one type.
    // It is declared using the pipe (|) symbol.

// SYNTAX 
    // let variable: type1 | type2 | type3;


type PaymentMethod = "credit" | "debit" | "upi";
let payment: PaymentMethod;

payment = "credit"; // valid
payment = "upi";    // valid
// payment = "cash";  ❌ not allowed



// What is any type?

    // any disables type checking completely.
    // It lets the variable store anything and behave like plain JavaScript.

// SYNTAX
    // let variable: any;
let data: any;

data = 42;          // valid
data = "Hello";     // valid
data = true;        // valid
data = { name: "Alice" }; // valid
data = [1, 2, 3];   // valid


// Using any removes TypeScript’s benefit of type safety.

