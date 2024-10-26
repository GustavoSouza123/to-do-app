import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = ({ progress, tasks }) => {
    const data = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                label: 'Tasks',
                data: [progress.completed, progress.total - progress.completed],
                backgroundColor: ['#4CAF50', '#FF6384'],
                borderColor: ['#4CAF50', '#FF6384'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#444444', // Darker grid lines
                },
                ticks: {
                    color: '#ffffff', // White ticks
                },
            },
            x: {
                grid: {
                    color: '#444444', // Darker grid lines
                },
                ticks: {
                    color: '#ffffff', // White ticks
                },
            },
        },
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Progress Dashboard</h2>
            <p>Tasks Completed: {progress.completed}</p>
            <p>Total Tasks: {progress.total}</p>
            <p>
                Completion Rate:{' '}
                {progress.total > 0
                    ? tasks
                          .reduce(
                              (acc, task) =>
                                  acc + (task.completed ? task.priority : 0),
                              0
                          )
                          .toFixed(2)
                    : 0}
                %
            </p>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Dashboard;
