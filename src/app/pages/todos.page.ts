import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.component';
import { add, get } from '../todos.service';


@Component({
  template: `
    <div>
      <p>Ops, non ci sono task</p>
      <ul>
        <li *ngFor="let item of todos">{{item.title}}</li>
        <!--<button (click)="rimuovi()">&#x2611;</button></!-->
      </ul>
    </div>
    <div>
      <input type="text" [(ngModel)]="todo" id="inserisci" placeholder="Aggiungi un task">
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
    get().then((todos) => {
      this.todos = todos;
    })
  }

  aggiungi(){
    add(this.todo).then((todo) => {
      console.log(todo);
      this.todo = "";
    })
  }

  //rimuovi(){
  //  rem(this.todo).then((todo) => {
  //    console.log(todo);
  //    this.todo = "";
  //  })
  //}

}
