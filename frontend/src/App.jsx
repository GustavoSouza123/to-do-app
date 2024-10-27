import React from 'react';
import Home from './pages/Home';
import './css/global.css'; // Import the global CSS for dark theme

const App = () => {
    return (
        <div className="bg-background min-h-screen py-8 px-4 flex justify-center">
            <div className="max-w-[1200px] w-full"> {/* Set max width to 1400px */}
                <h1 className="text-3xl font-bold text-center text-white">Todo App</h1>
                <Home />
            </div>
        </div>
    );
};

export default App;
