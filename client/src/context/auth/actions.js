import axios from 'axios';

const ROOT_URL = 'http://localhost:5000/auth';

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    if (!loginPayload.email.length || !loginPayload.password.length) {
      return dispatch({ type: 'LOGIN_ERROR', error: 'Veuillez remplir tous les champs' });
    }

    const response = await axios.post(`${ROOT_URL}/login`, loginPayload, {
      validateStatus: function (status) {
        return status < 500;
      },
    });

    if (response.status === 200) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      return response.data;
    }

    return dispatch({ type: 'LOGIN_ERROR', error: response.data.errors[0] });
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}

export async function registerUser(dispatch, registerPayload) {
  try {
    if (Object.keys(registerPayload).some((key) => !registerPayload[key].length)) {
      return dispatch({ type: 'LOGIN_ERROR', error: 'Veuillez remplir tous les champs' });
    }
    if (registerPayload.password.toLowerCase() !== registerPayload.passwordConfirm.toLowerCase()) {
      return dispatch({ type: 'LOGIN_ERROR', error: 'Mauvais mot de passe.' });
    }

    const response = await axios.post(`${ROOT_URL}/register`, registerPayload, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
    console.log('actions', response);
    if (response.status === 200) {
      return dispatch({ type: 'REGISTER_SUCCESS' });
    }
    return dispatch({ type: 'LOGIN_ERROR', error: response.data.errors[0] });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', error: err });
  }
}
