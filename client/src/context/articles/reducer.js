export const initialState = [];

export const ArticleReducer = (initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [...initialState, action.payload];
    case 'DELETE_ARTICLE':
      return initialState.filter((el) => {
        console.log(action.payload);
        return el._id !== action.payload.id;
      });
    case 'GET_ARTICLE':
    case 'GET_ARTICLES':
      return action.payload;

    case 'EDIT_ARTICLE':
      return initialState.map((el) => (el._id === action.payload.id ? action.payload : el));
    case 'ERROR':
      throw new Error(action.payload);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
