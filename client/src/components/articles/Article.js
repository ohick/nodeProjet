import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
  const [article, setArticle] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(`http://localhost:5000/articles/${params.id}`);
      setArticle(response.data.article[0]);
    };
    fetchArticle();
  }, [params.id]);
  console.log(article);
  return (
    <div className="row justify-content-center p-5">
      <div className="col-6">
        <h1>{article.title}</h1>
        <p>{article.author}</p>
        <p>{article.updatedAt}</p>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
