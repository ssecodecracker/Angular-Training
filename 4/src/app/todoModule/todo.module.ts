import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TodoService, HttpErrorHandler, MessageService } from './services/index';
import { TodoComponent } from './components/todoComponent/todo.component';
import { MessagesComponent } from './components/messagesComponent/messages.component';

@NgModule({
    declarations: [TodoComponent, MessagesComponent],
    imports: [BrowserModule, FormsModule],
    providers: [TodoService, HttpErrorHandler, MessageService ],
    exports: [TodoComponent]
})
export class TodoModule {}
