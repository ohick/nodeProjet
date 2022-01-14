const express = require('express');
const router = express.Router();
const {
  addArticle,
  getArticles,
  getArticleByID,
  editArticle,
  deleteArticle,
} = require('../controller/articles.controller');

router.get('/', getArticles);
router.get('/:id', getArticleByID);
router.post('/add', addArticle);
router.put('/edit/:id', editArticle);
router.get('/delete/:id', deleteArticle);

module.exports = router;
