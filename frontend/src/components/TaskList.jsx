import React from 'react';

const TaskList = ({ tasks, onComplete, onUncomplete }) => {
    return (
        <div>
            <h2 className="text-xl font-bold">Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={`border-b py-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
