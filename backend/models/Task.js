import db from '../database/db.js'; // Import the database connection

const Task = {
    getAll: (callback) => {
        db.query('SELECT * FROM tasks', callback);
    },
    create: (task, callback) => {
        db.query(
            'INSERT INTO tasks (name, priority) VALUES (?, ?)',
            [task.name, task.priority],
            callback
        );
    },
	complete: (id, callback) => {
        db.query(
            'UPDATE tasks SET completed = 1 WHERE id = ?',
            [id],
            callback
        );
    },
	uncomplete: (id, callback) => {
        db.query(
            'UPDATE tasks SET completed = 0 WHERE id = ?',
            [id],
            callback
        );
    },
	update: (id, task, callback) => {
        db.query(
            'UPDATE tasks SET name = ?, priority = ? WHERE id = ?',
            [task.name, task.priority, id],
            callback
        );
    },
	delete: (id, callback) => {
        db.query(
            'DELETE FROM tasks WHERE id = ?',
            [id],
            callback
        );
    },
};

export default Task; // Export the Task object
