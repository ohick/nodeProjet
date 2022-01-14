import React, { useEffect, useState } from 'react';

import { useAuthState, useAuthDispatch } from '../../context/auth';
import { useArticleState, useArticleDispatch, getArticles, deleteArticle } from '../../context/articles';
import verifyToken from '../../lib/verifyToken';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const articleState = useArticleState();
  const articleDispatch = useArticleDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      await getArticles(articleDispatch);
    };

    if (authState.isAuth) {
      fetchArticles();
    }
  }, [authState, articleDispatch]);

  useEffect(() => {
    const tokenValidity = async () => {
      return await verifyToken(authDispatch, authState.token);
    };
    tokenValidity();
  }, [authState, authDispatch, articleState]);

  useEffect(() => {
    setArticles(articleState);
  }, [articleState]);

  return (
    <div className="container ">
      <div className="row">
        {console.log(articles)}
        {articles.length &&
          articles.map((article) => (
            <div className="card m-1" style={{ width: '18rem' }} key={article._id}>
              <img src="" className="card-img-top" alt="illustration" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  Posted by&nbsp;
                  {article.author}
                  &nbsp;on&nbsp; {article.createdAt}
                </p>
                <a href={`articles/${article._id}`} className="btn btn-primary">
                  Read
                </a>
                {authState.isAuth && authState.role === 'admin' && (
                  <>
                    <a href={`articles/${article._id}/edit`} className="btn btn-warning ms-1">
                      Edit
                    </a>
                    <button
                      className="btn btn-danger ms-1"
                      onClick={() => deleteArticle(articleDispatch, { id: article._id })}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Articles;
