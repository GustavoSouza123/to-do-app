import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({ name: taskName, priority });
        setTaskName('');
        setPriority(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
                className="border p-2 mr-2 bg-gray-700 text-white"
                required
            />
            <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Priority (%)"
                className="border p-2 mr-2 bg-gray-700 text-white"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
        </form>
    );
};

export default TaskForm;
