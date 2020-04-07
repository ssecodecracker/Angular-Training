import { Injectable } from '@angular/core';
import { TODOS, TodoType } from './../../mockdata/index';
import { Observable, of } from 'rxjs';

@Injectable()
export class SearchService {

  todos = [];
  constructor() {}

  getSearchReslts(searchText, todos): Observable<TodoType[]>{
    return of(this.todos = todos.filter(todo => {
      return todo.description.toLowerCase().includes(searchText.toLowerCase());
  }));
  }
}
