import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServicesService {
  todoList: Array<Todo> = [
    {
      id: 1,
      name: 'tache1',
      createdAt: new Date(),
      time: 1,
      done: false,
    },
  ];
  constructor() {}
  onDoneTodo(todo: Todo): void {
    todo.done = !todo.done;
  }
  getAllTodo(): Array<Todo> {
    return this.todoList;
  }
}
