import axios from "axios";

const url = 'http://jsonplaceholder.typicode.com/todos/1'

// This operation is async. It returns a promise
axios.get(url).then(response => {
    console.log(response.data)
});