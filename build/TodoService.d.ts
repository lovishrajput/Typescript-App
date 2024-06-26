interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
declare enum TodoState {
    Active = 1,
    Complete = 2
}
interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo | null;
    toggle(todoId: number): void;
}
declare class TodoService implements ITodoService {
    private static _lastId;
    private static generateTodoId;
    private static clone;
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo | null;
    toggle(todoId: number): void;
    private _find;
}
