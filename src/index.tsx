import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import { rootReducers } from './reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer({}),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
