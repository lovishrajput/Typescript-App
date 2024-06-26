interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

enum TodoState {
    Active = 1,
    Complete = 2
}

interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo|null;
    toggle(todoId: number): void;
}

class TodoService implements ITodoService {
    
    private static _lastId = 0;

    private static generateTodoId(): number {
        return TodoService._lastId += 1;
    }
    
    private static clone<T>(src: T): T {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };

    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if(todos) {
            todos.forEach(todo => this.add(todo));
        }
    }

    // Accepts a todo name or todo object
    add(todo: Todo): Todo
    add(todo: string): Todo
    add(input: string | Todo): Todo {

        var todo: Todo = {
            id: TodoService.generateTodoId(),
            name: '',
            state: TodoState.Active
        };

        if(typeof input === 'string') {
            todo.name = input;
        } 
        else if(typeof input.name === 'string') {
            todo.name = input.name;
        } 
        else {
            throw 'Invalid Todo name!';
        }

        this.todos.push(todo);

        return todo;
    };


    clearCompleted(): void {
       
        this.todos = this.todos.filter(
            x => x.state == TodoState.Active
        );
    }
    

    getAll(): Todo[] {
        return TodoService.clone(this.todos);
    };


    getById(todoId: number): Todo | null {
        var todo = this._find(todoId);

        if(todo === null){
            return null;
        }
        return TodoService.clone(todo);
    };
    
    toggle(todoId: number): void {

        var todo = this._find(todoId);
        
        if(!todo) return;
        
        switch(todo.state) {
            case TodoState.Active:
                todo.state = TodoState.Complete;
                break;
                
            case TodoState.Complete:
                todo.state = TodoState.Active;
                break;
        }
    }

    private _find(todoId: number): Todo | null{
        var filtered = this.todos.filter(
            x => x.id == todoId
        );
        
        if (filtered.length) {
            return filtered[0];
        }
        
        return null;
    }
}