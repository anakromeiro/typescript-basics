// number is a type annotation
const apples: number = 5;

// TS will show an error, because apples is a constant
apples = 10;

let bananas: number = 10;
bananas = 11;

// Type inference
let message = "Hello!";

let city: string = "London";

let nothing: null = null;
let nothingAgain: undefined = undefined;

let birthDate: Date = new Date();

// Arrays
// string[] just indicates a type array of strings
// ["red", "blue", "yellow"] actually creates the array
let colors: string[] = ["red", "blue", "yellow"];
let holidays: number[] = [10, 20, 30];

// Classes
class Car {}
let myFirstCar: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (number: number) => void = (number: number) => {
  console.log(number);
};
