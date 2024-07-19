import axios from "axios";

const url = 'http://jsonplaceholder.typicode.com/todos/1'

// This operation is async. It returns a promise
axios.get(url).then(response => {
    const todo = response.data;
    
    const id = todo.id;
    const title = todo.title;
    const isCompleted = todo.completed?'Done':'In Progress';

    console.log(`
        TODO ${id} - ${title} is ${isCompleted}
        `);
});