import { Add } from '../components/todo/add';
import { List } from '../components/todo/list';
import { TaskCounter } from '../components/todo/task-counter';

export function TodoPage() {
    return (
        <main>
            <h2>Lista de tareas</h2>
            <TaskCounter />
            <Add></Add>
            <List />
        </main>
    );
}

export default TodoPage;
