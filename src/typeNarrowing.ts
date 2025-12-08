function printData(data: string | number) {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else {
    console.log(data.toFixed(2));
  }
}
printData("hello");
printData(3.14159);


function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

let num: unknown = 50;

if (isNumber(num)) {
  console.log(num.toFixed(2));  // safe
} else {
  console.log("Not a number");
}
