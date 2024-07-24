const json_response =
  '{ "title": "A article", "url": "http://google.com", "num_upvotes": "1"}';
// all_articles has type any because JSON.parse cannot guess all different types from the raw json object
const all_articles = JSON.parse(json_response);
console.log(all_articles);

all_articles.non_existent_property = "TS cannot verify that";
