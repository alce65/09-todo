import { useState, useEffect } from 'react';
import { Add } from '../components/todo/add';
import { List } from '../components/todo/list';
import { TaskCounter } from '../components/todo/task-counter';
import { TaskModel } from '../models/task';
import { StoreClass } from '../services/store.tasks';

export function TodoPage() {
    const initialState: Array<TaskModel> = [];
    const [tasks, setTasks] = useState(initialState);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    const store = new StoreClass('Task-Context');

    useEffect(() => {
        console.log('Use effect carga');
        store.getTasks().then((data) => setTasks(data));
    }, []);

    useEffect(() => {
        console.log('Use efffect contador');
        setTasksCompleted(tasks.filter((task) => task.isCompleted).length);
        store.setTasks(tasks);
    }, [tasks]);

    const addTask = (task: TaskModel) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id: TaskModel['id']) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleComplete = (id: TaskModel['id']) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <main>
            <h2>Lista de tareas</h2>
            <TaskCounter completed={tasksCompleted} />
            <Add addTask={addTask}></Add>
            <List
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                tasks={tasks}
            />
        </main>
    );
}

export default TodoPage;
