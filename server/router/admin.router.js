const express = require('express');
const router = express.Router();

// const { postRegistration, postLogin } = require('../controller/articles.controller');

router.get('/admin', (req, res) => res.json({ contenu: 'Admin des articles', acces: 'admin' }));
router.get('/:id/edit', (req, res) => res.json({ contenu: "Présentation d'un article", acces: 'admin' }));
router.get('/:id/delete', (req, res) => res.json({ contenu: "Présentation d'un article", acces: 'admin' }));
router.get('/:id/add', (req, res) => res.json({ contenu: "Présentation d'un article", acces: 'admin' }));

module.exports = router;
