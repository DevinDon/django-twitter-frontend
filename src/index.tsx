import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import { rootReducers } from './common/reducers';
import './index.css';

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer({}),
  ),
);

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Microsoft Yahei', 'PingFang', '微软雅黑'].join(','),
    fontSize: 12,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <React.StrictMode>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
