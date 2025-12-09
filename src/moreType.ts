let response : any = "42"
let lengthOfResponse: number = (response as string).length 
//here the stuff written in the parentheses is called a type assertion 

type Book ={
    name: string;
}

let bookString = '{"name":"TypeScript Book"}'

let bookObject: Book = JSON.parse(bookString) as Book
// here we are asserting that the result of JSON.parse is of type Book

console.log(bookObject);

const inputElement = document.getElementById("user-input") as HTMLInputElement;
// here we are asserting that the element with id "user-input" is an HTMLInputElement

let value : any = "Hello, TypeScript!"
value = [1,2,3]
value = 4.2

value.toUpperCase() // this will cause a runtime error because value is now a number

let newValue : unknown = "Hello, TypeScript!"

newValue =[1,2,3]
newValue = 4.2

//newValue.toUpperCase() // this will cause a compile-time error because newValue is of type unknown

if (typeof newValue === "string"){
    console.log(newValue.toUpperCase()) // this is safe because we checked the type
}

try {
    
} catch (error : any) {
    console.log(error.message);// here we assert that error is of type any to access the message property

    
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message); // here we check if error is an instance of Error before accessing the message property
    }
    console.log("Error" , error);
}

const data : unknown = "Some data"

const strData : string = data as string // asserting unknown to string

type Role = "admin" | "user" 

function redirectBasedOnRole(role : Role):void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirect to user homepage");
        return
    }
    role = "admin" // this will cause a compile-time error because all possible values of Role have been handled

}

function neverReturns() : never {
    while(true){
        // infinite loop
    }
}