import { createContext } from 'react';
import { TaskModel } from '../models/task';

const initaialContext: { tasks: Array<TaskModel> } = { tasks: [] };

export const TodoContext = createContext(initaialContext);
