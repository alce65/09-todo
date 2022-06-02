import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { TodoContext } from './todo-context';
import { TaskModel } from '../models/task';
import { HttpStoreTasks } from '../services/http.store.task';

export function TodoContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<TaskModel> = [];
    const [tasks, setTasks] = useState(initialState);

    const apiTasks = new HttpStoreTasks();
    const [tasksCompleted, setTasksCompleted] = useState(0);

    useEffect(() => {
        console.log('Use effect carga');
        apiTasks.getTasks().then((data) => setTasks(data));
    }, []);

    useEffect(() => {
        console.log('Use efffect contador');
        setTasksCompleted(tasks.filter((task) => task.isCompleted).length);
        /// store.setTasks(tasks);
    }, [tasks]);

    const addTask = async (task: TaskModel) => {
        setTasks([...tasks, await apiTasks.setTask(task)]);
    };

    const deleteTask = (id: TaskModel['id']) => {
        apiTasks.deleteTask(String(id)).then(() => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
        });
    };

    const toggleComplete = (id: TaskModel['id']) => {
        apiTasks
            .updateTask(tasks.find((item) => +item.id === +id) as TaskModel)
            .then(() => {
                const updatedTasks = tasks.map((task) =>
                    task.id === id
                        ? { ...task, isCompleted: !task.isCompleted }
                        : task
                );
                setTasks(updatedTasks);
            });
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
