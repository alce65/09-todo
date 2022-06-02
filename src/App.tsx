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

function App() {
    const HomePage = React.lazy(() => import('./pages/home'));
    const GotPage = React.lazy(() => import('./pages/got'));
    const FormPage = React.lazy(() => import('./pages/form'));

    const options: aMenuItems = [
        { path: '', label: 'Tasks', page: <HomePage /> },
        { path: 'user', label: 'Users', page: <FormPage /> },
        { path: 'got', label: 'GoT', page: <GotPage /> },
        { path: '*', label: '', page: <Navigate replace to="" /> },
    ];

    console.log(options);
    return (
        <Router>
            <Layer options={options}>
                <React.Suspense>
                    <GotContextProvider>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </GotContextProvider>
                </React.Suspense>
            </Layer>
        </Router>
    );
}

export default App;
