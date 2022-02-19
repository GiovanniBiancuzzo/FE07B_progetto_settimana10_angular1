import { Todo } from "./models/todo.component";

let todos: Todo[] = [];

export function add(todo: string): Promise<Todo> { //funzione per aggiunta task in array
  return new Promise ((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = {
        title: todo,
        id: todos.length +1,
        completed: false
      };
      todos.push(newTodo);
      res(newTodo);
    }, 2000);
  })
}

export function get(): Promise<Todo[]> { //recupero e stampa array
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}
