import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoServicesService } from '../services/todo-services.service';
import { Todo } from '../models/Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  formTodo!: FormGroup;
  todoToSave!: Todo;
  constructor(
    private formBuilder: FormBuilder,
    private todoservices: TodoServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formTodo = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      time: [null, Validators.required],
      note: [null],
      groupManager: [null],
    });
  }

  onSubmit() {
    this.todoToSave = {
      ...this.formTodo.value,
      id: +(Math.random() * 1000).toFixed(),
      createdAt: new Date(),
      done: false,
    };
    //console.log(this.todoToSave);
    this.todoservices.addTodo(this.todoToSave);
    this.router.navigateByUrl('');
    this.formTodo.reset();
    this.todoservices.dataUpdated++;
  }
}
