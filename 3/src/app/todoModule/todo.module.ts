import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TodoFormComponent } from './components/todoFormComponent/todoForm.component';
import { TodoListComponent } from './components/todoListComponent/todoList.component';

@NgModule({
    declarations: [TodoFormComponent, TodoListComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    exports: [TodoListComponent]
})
export class TodoModule {}
