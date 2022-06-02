import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { TodoContext } from './todo-context';
import { TaskModel } from '../models/task';
import { StoreClass } from '../services/store.tasks';

export function TodoContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<TaskModel> = [];
    const [tasks, setTasks] = useState(initialState);

    const store = new StoreClass('Task-Context');
    const [tasksCompleted, setTasksCompleted] = useState(0);

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

    const context = {
        tasks,
        tasksCompleted,
        addTask,
        deleteTask,
        toggleComplete,
    };
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
