import { ReactElement } from 'react';
import { TodoContext } from './todo-context';

export function TodoContextProvider({ children }: { children: ReactElement }) {
    const context = { tasks: [] };
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
