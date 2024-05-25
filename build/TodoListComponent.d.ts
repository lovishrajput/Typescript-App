declare class TodoListComponent {
    private $el;
    constructor(el: HTMLElement);
    render(todos: any): 0 | undefined;
    private renderTodo;
}
