import React from 'react';
import Home from './pages/Home';
import './css/global.css'; // Import the global CSS for dark theme

const App = () => {
    return (
        <div className="bg-background min-h-screen p-4">
            <h1 className="text-3xl font-bold text-center text-white">Todo App</h1>
            <Home />
        </div>
    );
};

export default App;
