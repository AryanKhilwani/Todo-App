const zod = require('zod');

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.number()
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = {
    createTodo: todoSchema,
    updateTodo: updateTodo
};