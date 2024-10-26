import React, { useState } from 'react';

const TaskList = ({ tasks, onComplete, onUncomplete, onEdit, onDelete }) => {
    const [editingTask, setEditingTask] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskPriority, setTaskPriority] = useState(0);

    const handleEdit = (task) => {
        setEditingTask(task.id);
        setTaskName(task.name);
        setTaskPriority(task.priority);
    };

    const handleUpdate = (id) => {
        onEdit(id, { name: taskName, priority: taskPriority });
        setEditingTask(null);
        setTaskName('');
        setTaskPriority(0);
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={`border-b py-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {editingTask === task.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    className="border p-1"
                                />
                                <input
                                    type="number"
                                    value={taskPriority}
                                    onChange={(e) => setTaskPriority(e.target.value)}
                                    className="border p-1 ml-2"
                                />
                                <button
                                    onClick={() => handleUpdate(task.id)}
                                    className="ml-2 bg-blue-500 text-white p-1 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div>
                                {task.name} - {task.priority}%
                                {task.completed ? (
                                    <button
                                        onClick={() => onUncomplete(task.id)}
                                        className="ml-4 bg-red-500 text-white p-1 rounded"
                                    >
                                        Undo
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => onComplete(task.id)}
                                        className="ml-4 bg-green-500 text-white p-1 rounded"
                                    >
                                        Complete
                                    </button>
                                )}
                                <button
                                    onClick={() => handleEdit(task)}
                                    className="ml-4 bg-yellow-500 text-white p-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(task.id)}
                                    className="ml-4 bg-red-700 text-white p-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
