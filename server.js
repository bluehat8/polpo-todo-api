const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/data/db');
const validator = require('./src/helpers/validators');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


//ENPOINTS DE USERS

app.get('/users', (req, res) => {
    res.json(db.users);
});

app.get('/users/:id', (req, res) => {
    const user = db.users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
});

app.post('/users', (req, res) => {

    const validation = validator.validateUser(req, res);
    if (validation !== true) {
        return; 
    }
    const newUser = { id: db.users.length + 1, ...req.body };
    db.users.push(newUser);
    res.status(201).json(newUser);
});


//ENPOINTS DE TODOS

app.get('/users/:id/todos', (req, res) => {
    const user = db.users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    
    const userTodos = db.todos.filter(todo => todo.userId === parseInt(req.params.id));
    res.json(userTodos);
});

app.get('/todos/:id', (req, res) => {
    const todo = db.todos.find(todo => todo.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo no encontrado' });

    const todoTasks = db.tasks.filter(task => task.todoId === todo.id);
    res.json({ ...todo, todos: todoTasks });
});

app.post('/todos/:id/task', (req, res) => {

    const user = db.users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const validation = validator.validateTask(req, res);
    if (validation !== true) {
        return; 
    }

    const newTask = { id: db.tasks.length + 1, ...req.body, todoId: parseInt(req.params.id), userId: 1 };
    db.tasks.push(newTask);
    res.status(201).json(newTask);
});


/***** INICIALIZANDO EL SERVIDOR *****/
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

