"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
// This operation is async. It returns a promise
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
