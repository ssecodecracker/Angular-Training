import { Pipe, PipeTransform } from '@angular/core';
import { TodoType } from '../../../mockdata';

@Pipe({
  name: 'sort'
})
export class SortTodo implements PipeTransform {
  transform(allTodos, order) {
    // tslint:disable-next-line: no-debugger
    debugger;
    if (order === 'asc') {
      return allTodos.sort((a, b) => a.title > b.title ? 1 : -1);
    } else {
      return allTodos.sort((a, b) => a.title < b.title ? 1 : -1);
    }

  }
}
