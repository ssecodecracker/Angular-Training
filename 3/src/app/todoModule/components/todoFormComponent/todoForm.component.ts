import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoForm.component.html',
  styleUrls: ['./todoForm.component.css']
})
export class TodoFormComponent {
  constructor() {}

  todoDesc;

  @Output()
  sendRequest = new EventEmitter<string>();

  sendTodoData() {
    this.sendRequest.emit(this.todoDesc);
  }

}
