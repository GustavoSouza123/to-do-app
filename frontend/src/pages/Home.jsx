import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Dashboard from '../components/Dashboard';
import HelpModal from '../components/HelpModal'; // Import the HelpModal
import { FaQuestionCircle } from 'react-icons/fa';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [progress, setProgress] = useState({ completed: 0, total: 0 });
    const [isHelpModalOpen, setHelpModalOpen] = useState(false); // State for modal

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then((response) => response.json())
            .then((data) => {
                setTasks(data);
                updateProgress(data);
            });
    }, []);

    const addTask = (task) => {
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        })
            .then((response) => response.json())
            .then((newTask) => {
                setTasks([...tasks, newTask]);
                updateProgress([...tasks, newTask]);
            });
    };

    const completeTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}/complete`, {
            method: 'PUT',
        }).then(() => {
            const updatedTasks = tasks.map((task) =>
                task.id === id ? { ...task, completed: true } : task
            );
            setTasks(updatedTasks);
            updateProgress(updatedTasks);
        });
    };

    const uncompleteTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}/uncomplete`, {
            method: 'PUT',
        }).then(() => {
            const updatedTasks = tasks.map((task) =>
                task.id === id ? { ...task, completed: false } : task
            );
            setTasks(updatedTasks);
            updateProgress(updatedTasks);
        });
    };

    const editTask = (id, updatedTask) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask),
        }).then(() => {
            const updatedTasks = tasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            );
            setTasks(updatedTasks);
            updateProgress(updatedTasks);
        });
    };

    const deleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'DELETE',
            }).then(() => {
                const updatedTasks = tasks.filter((task) => task.id !== id);
                setTasks(updatedTasks);
                updateProgress(updatedTasks);
            });
        }
    };

    const updateProgress = (tasks) => {
        const completed = tasks.filter((task) => task.completed).length;
        setProgress({ completed, total: tasks.length });
    };

    return (
        <div className="pt-8 flex flex-col gap-6">
            <TaskForm onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onComplete={completeTask}
                onUncomplete={uncompleteTask}
                onEdit={editTask}
                onDelete={deleteTask}
            />
            <Dashboard progress={progress} tasks={tasks} />
            <button
                onClick={() => setHelpModalOpen(true)}
                className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
            >
                <FaQuestionCircle size={20} />
            </button>
            <HelpModal isOpen={isHelpModalOpen} onClose={() => setHelpModalOpen(false)} />
        </div>
    );
};

export default Home;
