import { resolve } from "dns";
import { Todo } from "./models/todo.component";

let todos: Todo[] = [];
let todosT: Todo[] = [];

export function add(todo: string): Promise<Todo> {//aggiunta elemento array
  return new Promise ((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = {
        title: todo,
        id: todos.length + 1,
        completed: false
      };
      todos.push(newTodo);
      res(newTodo);
    }, 2000);
  })
}

export function getF(): Promise<Todo[]> { //stampa array  in todos.page.ts
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}

export function getT(): Promise<Todo[]> { //stampa array completati in completed.page.ts
  return new Promise((res, rej) => {
    setTimeout(() => {
    //todosT = todos.map(changeState)
      res(todosT);
    }, 2000);
  });
}

export function changeState(todos: Partial<Todo>, i:Number): Promise<Todo>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.completed = true;
      todosT = todos.map(changeState)
    }, 2000);
  })
}

//export function rem(todo: string): Promise<Todo> {
//  return new Promise ((res, rej) => {
//    setTimeout(() => {
//      const newTodo: Todo = {
//        completed: true
//      };
//      todos.splice(index, 1)
//      res(newTodo);
//    }, 2000);
//  })
//}





//export function changeState(todos: Partial<Todo>, i:Number): Promise<Todo>{
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      todos.completed = true;
//    }, 2000);
//  })
//}

