import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TodoFormComponent } from './components/todoFormComponent/todoForm.component';
import { TodoListComponent } from './components/todoListComponent/todoList.component';
import { TodoService, HttpErrorHandler, MessageService, SearchService } from './services/index';
import { TodoComponent } from './components/todoComponent/todo.component';
import { MessagesComponent } from './components/messagesComponent/messages.component';
import { SortTodo} from './components/todoComponent/sortTodo.pipe';

@NgModule({
    declarations: [TodoFormComponent, TodoListComponent, TodoComponent, MessagesComponent, SortTodo],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers: [TodoService, HttpErrorHandler, MessageService, SearchService ],
    exports: [TodoComponent]
})
export class TodoModule {}
