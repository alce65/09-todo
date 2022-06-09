import { render, screen } from '@testing-library/react';
import { TodoContext } from '../../context/todo-context';
import { List } from './list';

test('should first', () => {
    const context = {
        tasks: [],
        tasksCompleted: 0,
        addTask: jest.fn(),
        deleteTask: jest.fn(),
        toggleComplete: jest.fn(),
    };

    render(
        <TodoContext.Provider value={context}>
            <List></List>
        </TodoContext.Provider>
    );
});
