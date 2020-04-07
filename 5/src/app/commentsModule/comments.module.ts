import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommentsComponent } from './component/commentsComponent/comments.component';
import { CommentsService } from './service/comments.service';


@NgModule({
    declarations: [CommentsComponent],
    imports: [BrowserModule],
    providers: [CommentsService],
    exports: [CommentsComponent]
})
export class CommentsModule {}
