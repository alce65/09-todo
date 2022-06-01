import { useState, useEffect } from 'react';
import { Add } from '../components/home/add';
import { List } from '../components/home/list';
import { TaskCounter } from '../components/home/task-counter';
import { TaskModel } from '../models/task';
import { getTaskList } from '../models/tasks';

export function HomePage() {
    const initialState: Array<TaskModel> = [];
    const [tasks, setTasks] = useState(initialState);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    useEffect(() => {
        console.log('Use effect carga');
        getTaskList().then((data) => setTasks(data));
    }, []);

    useEffect(() => {
        console.log('Use efffect contador');
        setTasksCompleted(tasks.filter((task) => task.isCompleted).length);
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
