const add = (a: number, b: number): number => {
  return a + b;
};

// Missing the return, TS understood it returns void. So it's better to explicitly add the return type annotation
const subtract = (a: number, b: number) => {
  a - b;
};

// Named function
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  //   A function with type annotion that returns void, can return undefined!
  return undefined;
};

// type annotation 'never' means that the function will never reach the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
  message = message.trim();
};

// Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "Sunny",
};
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date, forecast.weather);
// };
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

// ES2015
// const logWeather = ({ date, weather }): void => {
//   console.log(date, weather);
// };

logWeather(todaysWeather);
