const Article = require('../model/article.model');

const addArticle = async (req, res) => {
  if (req.error) {
    console.log(req.error);
  }
  const article = new Article(req.body);
  await article.save();
  return res.status(200).json({ article });
};

const getArticles = async (req, res) => {
  if (req.error) {
    console.log(req.error);
  }

  const articles = await Article.find();
  return res.status(200).json({ articles });
};

const getArticleByID = async (req, res) => {
  const article = await Article.find({ _id: req.params.id });
  return res.status(200).json({ article });
};

const editArticle = async (req, res) => {
  const article = await Article.updateOne({ _id: req.params.id }, req.body);
  console.log(article);
  return res.status(200).json({ id: article });
};

const deleteArticle = async (req, res) => {
  await Article.findOneAndDelete({ _id: req.params.id });
  return res.status(200).json({ id: req.params.id });
};

module.exports = { addArticle, getArticles, getArticleByID, editArticle, deleteArticle };
