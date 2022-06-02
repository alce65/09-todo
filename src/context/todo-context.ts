import { createContext } from 'react';
import { TaskModel } from '../models/task';

const initaialContext: {
    tasks: Array<TaskModel>;
    tasksCompleted: number;
    addTask: (task: TaskModel) => void;
    deleteTask: (id: TaskModel['id']) => void;
    toggleComplete: (id: TaskModel['id']) => void;
} = {
    tasks: [],
    tasksCompleted: 0,
    addTask: () => {},
    deleteTask: () => {},
    toggleComplete: () => {},
};

export const TodoContext = createContext(initaialContext);
