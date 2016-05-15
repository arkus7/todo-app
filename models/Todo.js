var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
  note: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
}, { minimize: false });

module.exports = mongoose.model('Todo', TodoSchema);
