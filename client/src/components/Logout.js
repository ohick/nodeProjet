import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout, useAuthDispatch } from '../context/auth';

const Logout = () => {
  const history = useNavigate();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    const logoutUser = async () => {
      const response = await logout(dispatch);
      return response;
    };

    const logoutStatus = logoutUser();
    if (logoutStatus) history('/');
  }, [history, dispatch]);
  return null;
};

export default Logout;
