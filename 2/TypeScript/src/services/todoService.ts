import { TODOS, TodoType } from '../mockdata/todo';

export class TodoService {
    constructor() {}

    getAllTodos(): Promise<TodoType[]> {
        return new Promise ((reslove, reject) => {
            setTimeout(reslove, 5000, TODOS);
        });
    }

    getAllCommpletedTodos(): Promise<TodoType[]> {        
        let completedTodos = [...TODOS];
        return new Promise ((resolve, reject) => {
            setTimeout(resolve, 5000, completedTodos = completedTodos.filter(filteredTodo => {
                return filteredTodo.completed == false;
            }))
        })
    }

    saveTodo(updatedTodos): Promise<String> {
        TODOS.push(updatedTodos);
        return new Promise ((resolve, reject) => {
            setTimeout(resolve, 5000, 'Todo Saved')
        })
    }

    updateTodo(indexOfTodo, updatedTodo): Promise<String> {
        TODOS[indexOfTodo] = {...updatedTodo};
        return new Promise ((resolve, reject) => {
            setTimeout(resolve, 5000, 'Todo Updated')
        })
    }
}