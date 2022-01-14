import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import { addArticle, useArticleDispatch } from '../../context/articles';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const history = useNavigate();
  const dispatch = useArticleDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = { author, title, content };

    await addArticle(dispatch, article);
    return history('/');
  };

  return (
    <div className="row justify-content-center p-5">
      <form className="col-6" onSubmit={handleSubmit}>
        <h1>Ajouter un article</h1>
        <Input name="title" value={title} label="Titre" handleChange={(val) => setTitle(val)} type="text" />
        <Input name="author" value={author} label="Auteur" handleChange={(val) => setAuthor(val)} type="text" />
        <div className="mb-3">
          <label htmlFor="floatingTextarea" className="form-label">
            Contenu
          </label>
          <textarea
            className="form-control"
            id="floatingTextarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
