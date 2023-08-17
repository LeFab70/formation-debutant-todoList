import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoServicesService } from '../services/todo-services.service';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css'],
})
export class OneTodoComponent implements OnInit, OnChanges {
  @Input() filter!: string;
  todoList!: Array<Todo>;
  todoListCopy!: Array<Todo>;
  todoList$!: Observable<Array<Todo>>;

  dataUpdated!: number;
  // interval$!: Observable<Todo>;
  constructor(private todoServices: TodoServicesService) {}
  ngOnInit(): void {
    //this.todoList = [...this.todoServices.getAllTodo()];
    this.todoList$ = this.todoServices.getAllTodo();
    this.dataUpdated = this.todoServices.dataUpdated;
   // console.log(this.dataUpdated);
    this.todoListCopy = [...this.todoList]; //pour eviter kes aller et rerour vers la bd
    // interval(500)
    //   .pipe(tap(this.getTodo))
    //   .subscribe({
    //     next: (data) => console.log(data),
    //     error: (err) => console.log(err),
    //   });
    // setInterval(this.getTodo, 1000);
  }

  toDisplay(): Array<Todo> {
    //const copyOfTodo: Array<Todo> = [...this.todoList];
    if (this.filter === 'Done') {
      // this.todoList = [...this.todoServices.getAllTodo()];
      return this.todoList.filter((todo) => todo.done === true);
    } else if (this.filter === 'notdone') {
      //this.todoList = [...this.todoServices.getAllTodo()];
      return this.todoList.filter((todo) => todo.done === false);
    } else {
      return [...this.todoList];
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes.filter)
    //console.log(this.dataUpdated)
    this.todoListCopy = [...this.toDisplay()];
    // this.todoList = [...this.todoServices.getAllTodo()];
  }
  // getTodo(): Array<Todo>|[] {
  //   //console.log(1);
  //   this.todoList = [...this.todoServices.getAllTodo()];
  //   return this.todoList;
  // }

  onDoneTodo(todo: Todo) {
    this.todoServices.onDoneTodo(todo);
  }
  onDeleteTodo(todo: Todo) {
    this.todoServices.removeTodo(todo);
    //this.todoList = [...this.todoServices.getAllTodo()];
  }
}
