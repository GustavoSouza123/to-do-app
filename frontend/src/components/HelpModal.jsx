import React from 'react';

const HelpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleClickOutside = (event) => {
        // Check if the click is outside the modal content
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleClickOutside}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[600px] w-full">
                <h2 className="text-2xl font-bold text-white mb-4">Help</h2>
                <p className="text-white mb-4">
                    This To-Do App is designed to help you manage your tasks efficiently by implementing the Pareto principle (80/20 rule). 
                    You can add tasks, mark them as completed or uncompleted, and track your progress through a user-friendly dashboard.
                </p>
                <h3 className="text-lg font-semibold text-white">What is the Pareto Principle?</h3>
                <p className="text-white mb-4">
                    The Pareto principle, also known as the 80/20 rule, states that roughly 80% of effects come from 20% of the causes. 
                    In the context of task management, this means that a small number of tasks are responsible for the majority of your results.
                </p>
                <h3 className="text-lg font-semibold text-white">Why is it Effective?</h3>
                <p className="text-white mb-4">
                    By focusing on the most impactful tasks (the vital few), you can maximize your productivity and achieve better results with less effort. 
                    This approach helps you prioritize your workload, ensuring that you spend your time on activities that yield the highest returns.
                </p>
                <h3 className="text-lg font-semibold text-white">Features of the app:</h3>
                <ul className="text-white list-disc list-inside mb-4">
                    <li>Add new tasks with priority levels.</li>
                    <li>Mark tasks as completed or uncompleted.</li>
                    <li>View a dashboard that displays the number of completed tasks and the overall completion rate.</li>
                    <li>Responsive design for a seamless user experience.</li>
                </ul>
                <button onClick={onClose} className="bg-blue-500 text-white p-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default HelpModal;
