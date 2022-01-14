import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Admin from './components/admin/Admin';
import { AuthProvider } from './context/auth';
import { ArticleProvider } from './context/articles';
import Article from './components/articles/Article';
import AddArticle from './components/articles/AddArticle';
import EditArticle from './components/articles/EditArticle';
import DeleteArticle from './components/articles/DeleteArticle';
import Home from './components/Home';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import RegisterUser from './components/RegisterUser';
import UserList from './components/admin/UserList';
import Logout from './components/Logout';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ArticleProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/register" element={<RegisterUser />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/admin/users" element={<UserList />}></Route>
            <Route path="/articles/:id" element={<Article />}></Route>
            <Route path="/articles/:id/edit" element={<EditArticle />}></Route>
            <Route path="/articles/:id/delete" element={<DeleteArticle />}></Route>
            <Route path="/articles/add" element={<AddArticle />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ArticleProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
