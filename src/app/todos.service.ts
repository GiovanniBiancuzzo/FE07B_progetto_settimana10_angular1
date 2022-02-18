import { Todo } from "./models/todo.component";

let todos: Todo[] = [];

export function add(todo: string): Promise<Todo> {
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

//export function rem(todo: string): Promise<Todo> {
//  return new Promise ((res, rej) => {
//    setTimeout(() => {
//      const newTodo: Todo = {
//        completed: false
//      };
//      todos.splice(index, 1)
//      res(newTodo);
//    }, 2000);
//  })
//}

export function get(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}
