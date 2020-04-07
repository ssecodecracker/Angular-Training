import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../service/comments.service';
import { CommentsType } from '../../../mockdata';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments: CommentsType [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService.getAllComments().then(comments => {
      this.comments = comments;
    });
  }
}
