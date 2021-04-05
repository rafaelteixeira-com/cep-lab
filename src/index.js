import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.sass';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';
//import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
   <ThemeProvider theme={theme}>
      <MainApp />
   </ThemeProvider>,
   document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
