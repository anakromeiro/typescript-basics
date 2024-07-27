// Case 1: When the function returns 'any' type and we need to clarify the value
const json_response =
  '{ "title": "A article", "url": "http://google.com", "num_upvotes": "1"}';

// all_articles has type any because JSON.parse cannot guess all different types from the raw json object
const all_articles = JSON.parse(json_response);
all_articles.non_existent_property = "TS cannot verify that";

// In this case we added a type annotation, now TS can "validate" if the property exists or not
const all_articles_with_type: {
  title: string;
  url: string;
  num_upvotes: number;
} = JSON.parse(json_response);
console.log(all_articles);

all_articles_with_type.non_existent_property = "TS cannot verify that";

// Case 2: When we declare a variable on one line then initialize it later
// In this case, TS can infer the variable type
const color = "red";

// In this case, TS shows a warning message: Variable 'foundWord' implicitly has an 'any' type, but a better type may be inferred from usage.ts
let words = ["red", "green", "yellow"];
let foundWord;
// let foundWord: boolean; OR let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "yellow") {
    foundWord = true;
  }
}

// Case 3: When we want a variable to have a type that can't be inferred correctly
// bad code ahead...
let numbers = [-10, -1, 10];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
