import { Component } from '@angular/core';
import { TodoType, TODOS} from './../../../mockdata/index';

@Component({
  selector: 'app-todolist',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent {
  constructor() {}

  todos = TODOS;
  newTodoToAdd: TodoType = {description: '', status: ''};

  completeTodo(todosIndex) {
    this.todos.splice(todosIndex, 1);
  }

  getTodoData(newTodo) {
    if (newTodo) {
      this.newTodoToAdd.description = newTodo;
      this.newTodoToAdd.status = 'active';

      this.todos.unshift(this.newTodoToAdd);
    }
  }
}
