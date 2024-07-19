import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

// Interface describe the structure of an object
interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

// This operation is async. It returns a promise
axios.get(url).then((response) => {
  const todo = response.data as TODO;

  const id = todo.id;
  const title = todo.title;
  const isCompleted = todo.completed ? "Done" : "In Progress";

  console.log(`
        Task ${id} - ${title} is ${isCompleted}
        `);
});
