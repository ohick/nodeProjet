import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Input from '../Input';
import { editArticle, useArticleDispatch, getArticle, useArticleState } from '../../context/articles';

const EditArticle = () => {
  const [article, setArticle] = useState({ title: '', author: '', content: '' });

  const history = useNavigate();
  const dispatch = useArticleDispatch();
  const articleState = useArticleState();
  const params = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      await getArticle(dispatch, { id: params.id });
    };
    fetchArticle();
  }, [dispatch, params.id]);

  useEffect(() => {
    setArticle(articleState);
  }, [articleState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editArticle(dispatch, { article, id: params.id });
    return history('/');
  };

  return (
    <div className="row justify-content-center p-5">
      <form className="col-6" onSubmit={handleSubmit}>
        <h1>Ajouter un article</h1>
        <Input
          name="title"
          value={article.title}
          label="Titre"
          handleChange={(val) => setArticle({ ...article, title: val })}
          type="text"
        />
        <Input
          name="author"
          value={article.author}
          label="Auteur"
          handleChange={(val) => setArticle({ ...article, author: val })}
          type="text"
        />
        <div className="mb-3">
          <label htmlFor="floatingTextarea" className="form-label">
            Contenu
          </label>
          <textarea
            className="form-control"
            id="floatingTextarea"
            value={article.content}
            onChange={(val) => setArticle({ ...article, content: val })}
            name="content"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
