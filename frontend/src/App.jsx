import React from 'react';
import Home from './pages/Home';
import './css/index.css';

const App = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center">Todo App</h1>
            <Home />
        </div>
    );
};

export default App;
