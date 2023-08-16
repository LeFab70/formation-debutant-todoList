import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoServicesService } from '../services/todo-services.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  addTodo!: boolean;
  todoList!: Array<Todo>;
  constructor(private todoServices: TodoServicesService) {}
  ngOnInit(): void {
    this.addTodo = false;
    this.todoList = [...this.todoServices.getAllTodo()];
  }
  onAddTodo() {
    this.addTodo = !this.addTodo;
  }
}
