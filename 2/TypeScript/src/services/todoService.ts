import { TODOS, TodoType } from '../mockdata/todo';

export class TodoService {
    constructor() {}

    getAllTodos(): Promise<TodoType[]> {
        return new Promise ((resolove, reject) => {
            setTimeout(resolove, 5000, TODOS);
        });
    }
}