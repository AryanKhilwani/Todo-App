const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aryankhilwani:<password>@learningmongodb.rgkekbm.mongodb.net/todoApp');

const todo = mongoose.model('Todos', {title: String, description: String, completed: Boolean});

module.exports = {
    todo: todo
};