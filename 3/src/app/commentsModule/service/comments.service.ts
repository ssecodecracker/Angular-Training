import { Injectable } from '@angular/core';
import { CommentsType, COMMENTS} from './../../mockdata/index';

@Injectable()
export class CommentsService {

  constructor() { }

  getAllComments(): Promise<CommentsType[]> {
    return new Promise ((reslove, reject) => {
        setTimeout(reslove, 5000, COMMENTS);
    });
  }
}
