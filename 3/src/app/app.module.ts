import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todoModule/todo.module';
import { CommentsModule} from './commentsModule/comments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoModule,
    CommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
