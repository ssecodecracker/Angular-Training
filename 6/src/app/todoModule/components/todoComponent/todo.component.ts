import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/index';
import { SearchService } from '../../services/index';
import { TodoType } from '../../../mockdata/index';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  order = 'asc';

  constructor(private todoService: TodoService, private searchService: SearchService) { }

  searchField: FormControl;

  todos;

  ngOnInit() {
    this.todos = this.todoService.getTodos();

    this.searchField = new FormControl('');

  }

  setOrder(order) {
    // tslint:disable-next-line: no-debugger
    debugger
    this.order = order;
  }

}
