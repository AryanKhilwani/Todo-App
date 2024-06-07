const express = require('express');
const {createTodo, updateTodo} = require('./types');
const {todo} = require('./db');

const port = 3000;
const app = express();

app.use(express.json());


app.get('/todos',async (req, res) => {
  const getTodos = await todo.find({});
  res.json({
    getTodos});
});

app.post('/todo', async (req, res) => {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);

    if (parsedPayload.success) {
        res.status(201);
    } else {
        res.status(411).json({
            msg : 'Invalid Input'
        });
    }

    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    });

    res.json({
        msg: "Todo Created"
    });

});

app.put('/completed', async (req, res) => {
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);

    if (parsedPayload.success) {
        res.status(201);
    } else {
        res.status(411).json({
            msg : 'Invalid Input'
        });
    }

    await todo.updateOne({_id: updatedPayload.id}, {completed: false});
    res.json({
        msg: "Todo Marked as done"
    });

});

app.listen(port);