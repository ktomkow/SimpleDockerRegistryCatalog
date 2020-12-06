import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { SnackbarProvider } from 'notistack';

import { Provider } from 'react-redux';
import store from './app/redux/store';
import MyThemeProvider from './app/themes/myThemeProvider';
import LanguageProvider from './app/localization/languageProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <MyThemeProvider>
          <SnackbarProvider maxSnack={10}>
            <App />
          </SnackbarProvider>
        </MyThemeProvider>
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
