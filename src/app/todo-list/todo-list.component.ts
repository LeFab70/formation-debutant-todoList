import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoServicesService } from '../services/todo-services.service';
import { ActivatedRoute, Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  addTodo!: boolean;
  choiceFilter!: string;
  // todoList!: Array<Todo>;
  constructor(
    private todoServices: TodoServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    //this.url = this.router.getCurrentNavigation();

    this.addTodo = false;
    // this.todoList = [...this.todoServices.getAllTodo()];
  }
  onAddTodo() {
    this.addTodo = !this.addTodo;
    this.router.navigateByUrl('/todolist');
  }
}
