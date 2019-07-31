import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.less']
})
export class TodoAppComponent implements OnInit {

  currentItem = {
    description: '',
    done: false,
    date: null
  };

  constructor(private service: TodoService) {

  }

  ngOnInit() {
  }

  addItem() {
    this.service.add(this.currentItem);
    this.currentItem = {
      description: '',
      done: false,
      date: null
    };
  }


  getItems() {
    return this.service.getItems();
  }
}
