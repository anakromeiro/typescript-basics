import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

// An Interface describe the structure of an object
interface TODO {
  id: number;
  title: string;
  status: boolean;
}

// This operation is async. It returns a promise
axios.get(url).then((response) => {
  const todo = response.data as TODO;

  const id = todo.id;
  const title = todo.title;
  const status = todo.status;

  logTODO(id, title, status);
});

const logTODO = (id: number, title: string, status: boolean) => {
  console.log(`
        Task ${id} - ${title} is ${status ? "Done" : "In Progress"}
        `);
};
