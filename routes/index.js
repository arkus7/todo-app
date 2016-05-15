var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'arkus' });
});

router.get('/todos', function(req, res, next) {
  Todo.find({}, function(err, todos) {
    todos.sort(function(a, b){return b.updated_at-a.updated_at});
    res.render('todos', { title: 'Todo list', todos: todos });
  });
});

module.exports = router;
