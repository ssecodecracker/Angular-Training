import { Injectable } from '@angular/core';
import { TodoType } from './../../mockdata/index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError  } from './index';

@Injectable()
export class TodoService {

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TodoService');
  }

  httpURL = 'http://localhost:3000/todos';

  getTodos(): Observable<TodoType[]> {
    return this.http.get<TodoType[]>(this.httpURL)
    .pipe(
      catchError(this.handleError('getTodos', []))
    );
  }
}
