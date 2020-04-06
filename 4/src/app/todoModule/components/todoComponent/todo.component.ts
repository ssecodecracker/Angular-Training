import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/index';
import { TodoType } from '../../../mockdata/index';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  constructor(private todoService: TodoService) { }

  todos: TodoType[] = [];

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => (this.todos = todos));
  }
}
