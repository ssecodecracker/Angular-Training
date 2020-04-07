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


  constructor(private todoService: TodoService, private searchService: SearchService) { }

  searchField: FormControl;

  todos: TodoType[] = [];

  ngOnInit() {
    this.getTodos();

    this.searchField = new FormControl('');

    this.searchField.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
      ).subscribe(item => {
        // tslint:disable-next-line: no-debugger
        debugger;
        this.searchService.getSearchReslts(item, this.todos).subscribe(todos => (this.todos = todos));

    });
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => (this.todos = todos));
  }
}
