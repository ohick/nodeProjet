const storageItem = localStorage.getItem('currentUser');
const username = storageItem ? JSON.parse(storageItem).username : '';
const token = storageItem ? JSON.parse(storageItem).token : '';
const role = storageItem ? JSON.parse(storageItem).role : '';
const isAuth = storageItem ? JSON.parse(storageItem).isAuth : '';

export const initialState = {
  username: '' || username,
  role: '' || role,
  token: '' || token,
  isAuth: false || isAuth,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        username: action.payload.username,
        role: action.payload.role,
        token: action.payload.token,
        isAuth: true,
      };
    case 'LOGOUT':
    case 'REGISTER_SUCCESS':
      return {
        ...initialState,
        username: '',
        token: '',
        role: '',
        isAuth: false,
      };

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        isAuth: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
