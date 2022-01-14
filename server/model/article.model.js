const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    qcm: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', ArticleSchema);
