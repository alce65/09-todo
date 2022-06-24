import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { TodoContext } from './todo-context';
import { TodoContextProvider } from './todo-provider';
import { HttpStoreTasks } from '../services/http.store.task';
import { TaskModel } from '../models/task';
import userEvent from '@testing-library/user-event';

jest.mock('../services/http.store.task');

const task1 = new TaskModel('Task1', 'Pepe');
const task2 = new TaskModel('Task2', 'Luisa');

describe('Given the context ', () => {
    describe('When it is used by a test componente', () => {
        let TestComponent: () => JSX.Element;
        beforeEach(() => {
            HttpStoreTasks.prototype.getTasks = jest
                .fn()
                .mockResolvedValue([task1]);
            TestComponent = function () {
                const { tasks, addTask, toggleComplete, deleteTask } =
                    useContext(TodoContext);
                return (
                    <>
                        <p>Probando contexto</p>
                        <ul>
                            {tasks.map((item) => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={() => {
                                addTask(new TaskModel('Task2', 'Juan'));
                            }}
                        >
                            Add Task
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                toggleComplete(task1.id);
                            }}
                        >
                            Complete Task
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                deleteTask(task2.id);
                            }}
                        >
                            Delete Task
                        </button>
                    </>
                );
            };
        });

        test('Then todolist should be render from context', async () => {
            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );
            let element = screen.getByText(/Probando contexto/i);
            expect(element).toBeInTheDocument();
            expect(HttpStoreTasks.prototype.getTasks).toHaveBeenCalled();

            element = await screen.findByText(/Task1/i);
            expect(element).toBeInTheDocument();
        });
        test('Then new todo should be render when add button is clicked', async () => {
            HttpStoreTasks.prototype.setTask = jest
                .fn()
                .mockResolvedValue(new TaskModel('Task2', 'Juan'));
            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );

            userEvent.click(screen.getByText(/Add Task/i));
            expect(HttpStoreTasks.prototype.setTask).toHaveBeenCalled();
            let element = await screen.findByText(/Task2/i);
            expect(element).toBeInTheDocument();
        });
        test('Then a todo should be completed when change button is clicked', async () => {
            task1.isCompleted = true;
            HttpStoreTasks.prototype.updateTask = jest
                .fn()
                .mockResolvedValue(task1);

            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );
            await screen.findByText(/Task1/i);
            userEvent.click(screen.getByText(/Complete Task/i));
            expect(HttpStoreTasks.prototype.updateTask).toHaveBeenCalled();
        });
        test('Then a todo should be deleted when delete button is clicked', async () => {
            HttpStoreTasks.prototype.deleteTask = jest
                .fn()
                .mockResolvedValue({ status: 200 });
            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );
            userEvent.click(await screen.findByText(/Delete Task/i));
            expect(HttpStoreTasks.prototype.deleteTask).toHaveBeenCalled();
        });
    });
});
