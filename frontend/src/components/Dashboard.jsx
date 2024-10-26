import React from 'react';

const Dashboard = ({ progress }) => {
    return (
        <div>
            <h2 className="text-xl font-bold">Progress Dashboard</h2>
            <p>Tasks Completed: {progress.completed}</p>
            <p>Total Tasks: {progress.total}</p>
            <p>
                Completion Rate:{' '}
                {((progress.completed / progress.total) * 100).toFixed(2)}%
            </p>
        </div>
    );
};

export default Dashboard;
