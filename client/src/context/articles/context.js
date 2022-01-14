import React, { useReducer } from 'react';

import { ArticleReducer, initialState } from './reducer';

const ArticleStateContext = React.createContext();
const ArticleDispatchContext = React.createContext();

export function useArticleState() {
  const context = React.useContext(ArticleStateContext);
  if (context === undefined) {
    throw new Error('useArticleState must be used within a ArticleProvider');
  }

  return context;
}

export function useArticleDispatch() {
  const context = React.useContext(ArticleDispatchContext);
  if (context === undefined) {
    throw new Error('useArticleDispatch must be used within a ArticleProvider');
  }

  return context;
}
export const ArticleProvider = ({ children }) => {
  const [article, dispatch] = useReducer(ArticleReducer, initialState);

  return (
    <ArticleStateContext.Provider value={article}>
      <ArticleDispatchContext.Provider value={dispatch}>{children}</ArticleDispatchContext.Provider>
    </ArticleStateContext.Provider>
  );
};
