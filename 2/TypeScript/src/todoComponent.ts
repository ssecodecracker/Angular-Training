import { TodoService } from './services';

class TodoComponent {
    constructor(private service: TodoService) { }

    private todos = [];

    public listAllTodo() {
        this.service.getAllTodos().then(todos => {
            this.todos = todos;
        });        
            
        console.log(this.todos);
    }

    public saveTodo() {

    }

    public updateTodo() {

    }

    public listAllCompletedTodo() {
        let completedTodos = [...this.todos];
        completedTodos = completedTodos.filter(filteredTodo => {
            return filteredTodo.completed == false;
        });
        
        console.log(completedTodos);
    }
}

let todos = new TodoComponent(new TodoService());
todos.listAllTodo();
todos.saveTodo();
todos.updateTodo();
todos.listAllCompletedTodo();