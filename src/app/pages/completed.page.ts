import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.component';
import * as TodoServices from '../todos.service';

@Component({
  template: `
    <p>
      Ancora nulla
    </p>
    <ul>
        <li *ngFor="let item of todos; let i = index">{{item.title}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class CompletedPage{

  todos!: Todo[];

  constructor() { }
    TodoServices.getT().then((todos) => {
      console.log(todos);
      this.todos = todos;
    })
}
