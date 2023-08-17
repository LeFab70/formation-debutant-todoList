import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoServicesService {
  todoList: Array<Todo> = [];
  dataUpdated: number = 0;
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000/';

  onDoneTodo(todo: Todo): void {
    //const todoCopy = this.todoList.filter((t) => t.id !== todo.id);
    todo.done = !todo.done;
    const indexOfTodo = this.todoList.indexOf(todo);
    //console.log(indexOfTodo);
    this.todoList.fill(todo, indexOfTodo, 1);
    //console.log(todoCopy);
    // this.todoList = [...todoCopy];
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }

  getAllTodo(): Observable<Array<Todo>> {
    //console.log(localStorage.getItem('todo'));
    //this.todoList = JSON.parse(localStorage.getItem('todo') || '[]');
    return this.http.get<Array<Todo>>(`${this.baseUrl}todos`);
  }
  addTodo(todo: Todo): void {
    this.todoList.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }
  removeTodo(todo: Todo): void {
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }
}
