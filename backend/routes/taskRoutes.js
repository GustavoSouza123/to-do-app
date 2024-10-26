import express from 'express';
import Task from '../models/Task.js';
const router = express.Router();

router.get('/', (req, res) => {
    Task.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        const task = results.find(t => t.id === parseInt(taskId));
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    });
});

router.post('/', (req, res) => {
    Task.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId, ...req.body });
    });
});

// Route to mark a task as completed
router.put('/:id/complete', (req, res) => {
    const taskId = req.params.id;
    Task.complete(taskId, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Task completed successfully' });
    });
});

// Route to mark a task as uncompleted
router.put('/:id/uncomplete', (req, res) => {
    const taskId = req.params.id;
    Task.uncomplete(taskId, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Task marked as uncompleted successfully' });
    });
});

// New route to update a task
router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.update(taskId, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Task updated successfully' });
    });
});

// New route to delete a task
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.delete(taskId, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Task deleted successfully' });
    });
});

export default router;
