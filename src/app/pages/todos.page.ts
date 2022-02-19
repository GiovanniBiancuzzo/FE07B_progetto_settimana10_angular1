import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.component';
import * as TodoServices from '../todos.service';


@Component({
  template: `
    <div>
      <p>Ops, non ci sono task</p>
      <ul>
        <li *ngFor="let item of todos; let i = index">{{item.title}}</li>
        <button (click)="completato(item, i)">&#x2611;</button>
      </ul>
    </div>
    <div>
      <input type="text" [(ngModel)]="todo" placeholder="Aggiungi un task">
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
    TodoServices.getF().then((todos) => {
      console.log(todos);
      this.todos = todos;
    })
  }

  aggiungi(){
    TodoServices.add(this.todo).then((todo) => {
      console.log(todo);
      this.todo = "";
    })
  }

  completato(item: Todo, i: number) {
    TodoServices.changeState(todos, i).then(() => {
      TodoServices.getT();
    })
    console.log(this.todo)
  };

  //rimuovi(){
  //  rem(this.todo).then((todo) => {
  //    console.log(todo);
  //    this.todo = "";
  //  })
  //}

}
