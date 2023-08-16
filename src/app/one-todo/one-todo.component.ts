import { Component, Input } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoServicesService } from '../services/todo-services.service';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css'],
})
export class OneTodoComponent {
  @Input() oneTodo!: Todo;
  constructor(private todoServices: TodoServicesService) {}

  onDoneTodo() {
    this.todoServices.onDoneTodo(this.oneTodo);
  }
}
