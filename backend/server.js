import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Todo API!' });
});

app.use('/tasks', taskRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
