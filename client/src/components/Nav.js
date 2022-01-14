import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthState } from '../context/auth';

const Nav = () => {
  const [user, setUser] = useState(false);
  const authState = useAuthState();

  useEffect(() => {
    console.log('nav update');
    return setUser(authState.isAuth);
  }, [authState]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {authState.role === 'admin' && (
            <>
              <li className="nav-item">
                <Link to="/articles/add" className="nav-link">
                  Add article
                </Link>
              </li>

              <li>
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {!user && (
            <>
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <Link to="/logout" className="nav-link">
                Log Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
