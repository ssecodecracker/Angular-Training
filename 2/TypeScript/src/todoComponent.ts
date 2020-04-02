import { TodoService } from './services';

class TodoComponent {
    constructor(private service: TodoService) { }

    public listAllTodo() {
        this.service.getAllTodos().then(todos => {
            console.log(todos);
        });        
    }

    public saveTodo(updateTodo = []) {
        this.service.saveTodo(updateTodo).then(response => {
            console.log(response);
        }); 
    }

    public updateTodo(index, todoToBeUpdated) {
        this.service.updateTodo(index, todoToBeUpdated).then(response => {
            console.log(response);
        }); 
    }

    public listAllCompletedTodo() {
        this.service.getAllCommpletedTodos().then(completedTodos => {
            console.log(completedTodos);
        });  
    }
}

let todoToBeUpdated =  {
    "userId": 3,
    "id": 54,
    "title": "Updated",
    "completed": true
}
let todos = new TodoComponent(new TodoService());
todos.listAllTodo();
todos.saveTodo();
todos.updateTodo(5, todoToBeUpdated);
todos.listAllCompletedTodo();