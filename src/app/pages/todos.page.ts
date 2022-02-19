import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.component';
import * as TodoServices from '../todos.service';


@Component({
  template: `
    <div>
      <p>Ops, non ci sono task</p>
      <ul>
        <li  *ngFor="let item of todos">{{item.title}}</li>
      </ul>
    </div>
    <div>
      <input type="text" [(ngModel)]="todo"  placeholder="Aggiungi un task">
      <button (click)="aggiungi()">Aggiungi</button>
    </div>
  `,
  styles: [
  ]
})
export class TodosPage {

  todo = "";
  todos!: Todo[];

  constructor() {
    TodoServices.get().then((todos) => {
      this.todos = todos;
    })
  }

  aggiungi(){
    TodoServices.add(this.todo).then((todo) => {
      console.log(todo);
      this.todo = "";
    })
  }
}
