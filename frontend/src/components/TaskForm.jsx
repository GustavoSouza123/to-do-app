import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({ name: taskName, priority });
        setTaskName('');
        setPriority(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col md:gap-3 md:flex-row items-start">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
                className="border p-2 mb-2 bg-gray-700 text-white w-full md:w-96 md:mb-0"
                required
            />
            <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Priority (%)"
                className="border p-2 mb-2 bg-gray-700 text-white w-full md:w-20 md:mb-0"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded flex items-center mt-2 md:mt-0">
                <FaPlus className="mr-1" /> {/* Add icon to the button */}
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
