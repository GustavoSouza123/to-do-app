import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaUndo } from 'react-icons/fa'; // Import icons from React Icons

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
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
            <div className="grid grid-cols-1 gap-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`border p-4 rounded-lg ${
                            task.completed && editingTask != task.id ? 'bg-gray-600' : 'bg-gray-800'
                        } text-white`}
                        onClick={() => {} /* No action on task click */}
                    >
                        {editingTask === task.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={taskName}
                                    onChange={(e) =>
                                        setTaskName(e.target.value)
                                    }
                                    className="border p-1 bg-gray-700 text-white"
                                />
                                <input
                                    type="number"
                                    value={taskPriority}
                                    onChange={(e) =>
                                        setTaskPriority(e.target.value)
                                    }
                                    className="border p-1 ml-2 bg-gray-700 text-white"
                                />
                                <button
                                    onClick={() => handleUpdate(task.id)}
                                    className="ml-2 bg-blue-500 text-white p-1 rounded"
                                >
                                    <FaCheck />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between">
                                <span
                                    style={{
                                        textDecoration: task.completed
                                            ? 'line-through'
                                            : 'none',
                                    }}
                                >
                                    {task.name} - {task.priority}%
                                </span>
                                <div className="flex items-center">
                                    {task.completed ? (
                                        <button
                                            onClick={() =>
                                                onUncomplete(task.id)
                                            }
                                            className="ml-4 bg-red-500 text-white p-1 rounded"
                                        >
                                            <FaUndo />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => onComplete(task.id)}
                                            className="ml-4 bg-green-500 text-white p-1 rounded"
                                        >
                                            <FaCheck />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleEdit(task)}
                                        className="ml-4 bg-yellow-500 text-white p-1 rounded"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => onDelete(task.id)}
                                        className="ml-4 bg-red-700 text-white p-1 rounded"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
