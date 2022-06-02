import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Layer } from './components/core/layer';
import { aMenuItems } from './interfaces/menu-items';
import * as React from 'react';
import { GotContextProvider } from './context/got-provider';
import { TodoContextProvider } from './context/todo-provider';

function App() {
    const HomePage = React.lazy(() => import('./pages/home'));
    const GotPage = React.lazy(() => import('./pages/got'));
    const FormPage = React.lazy(() => import('./pages/form'));
    const TodoPage = React.lazy(() => import('./pages/todo.context'));

    const options: aMenuItems = [
        { path: '', label: 'Home - Todo', page: <HomePage /> },
        { path: 'user', label: 'Users', page: <FormPage /> },
        { path: 'got', label: 'GoT', page: <GotPage /> },
        { path: 'tasks', label: 'Tasks - Context', page: <TodoPage /> },
        { path: '*', label: '', page: <Navigate replace to="" /> },
    ];

    console.log(options);
    return (
        <Router>
            <Layer options={options}>
                <React.Suspense>
                    <GotContextProvider>
                        <TodoContextProvider>
                            <Routes>
                                {options.map((item) => (
                                    <Route
                                        key={item.label}
                                        path={item.path}
                                        element={item.page}
                                    ></Route>
                                ))}
                            </Routes>
                        </TodoContextProvider>
                    </GotContextProvider>
                </React.Suspense>
            </Layer>
        </Router>
    );
}

export default App;
