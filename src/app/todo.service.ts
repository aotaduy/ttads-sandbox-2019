import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items = [];
  constructor() { }

  getItems() {
    return this.items;
  }
  add(item) {
  this.items.push(item);
  }
}

