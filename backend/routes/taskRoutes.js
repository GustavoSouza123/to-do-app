import express from 'express';
import Task from '../models/Task.js';
const router = express.Router();

router.get('/', (req, res) => {
    Task.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
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

// New route to mark a task as uncompleted
router.put('/:id/uncomplete', (req, res) => {
    const taskId = req.params.id;
    Task.uncomplete(taskId, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Task marked as uncompleted successfully' });
    });
});

export default router;
