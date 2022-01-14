import axios from 'axios';
const ROOT_URL = 'http://localhost:5000/articles';

const axiosParam = {
  validateStatus: function (status) {
    return status < 500;
  },
};

export async function addArticle(dispatch, payload) {
  const response = await axios.post(`${ROOT_URL}/add`, payload, axiosParam);
  if (response.status === 200) {
    return dispatch({ type: 'ADD_ARTICLE', payload: response.data.article });
  }
  return dispatch({ type: 'ERROR', error: response.data.errors[0] });
}

export async function editArticle(dispatch, payload) {
  const response = await axios.put(`${ROOT_URL}/edit/${payload.id}`, payload.article, axiosParam);
  if (response.status === 200) {
    return dispatch({ type: 'EDIT_ARTICLE', payload: response.data });
  }
  return dispatch({ type: 'ERROR', error: response.data.errors[0] });
}

export async function deleteArticle(dispatch, payload) {
  console.log(payload);
  const response = await axios.get(`${ROOT_URL}/delete/${payload.id}`, axiosParam);
  console.log(response);
  dispatch({ type: 'DELETE_ARTICLE', payload: response.data });
}

export async function getArticle(dispatch, payload) {
  const response = await axios.get(`${ROOT_URL}/${payload.id}`);
  console.log(response.data);
  dispatch({ type: 'GET_ARTICLE', payload: response.data.article[0] });
}

export async function getArticles(dispatch) {
  const response = await axios.get('http://localhost:5000/articles');
  dispatch({ type: 'GET_ARTICLES', payload: response.data.articles });
}
