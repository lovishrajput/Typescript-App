declare class TodoApp {
    private todoService;
    private todoList;
    constructor(el: any, todos: string[]);
    addTodo(todoName: Todo): void;
    clearCompleted(): void;
    toggleTodoState(todoId: number): void;
    renderTodos(): void;
    initialize(el: {
        getElementsByClassName: (arg0: string) => any[];
    }): void;
}
