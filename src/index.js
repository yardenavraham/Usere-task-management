import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './assetes/theme'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#35495e',
//     },
//     secondary: {
//       main: '#347474'
//     },
//     error: {
//       main: '#ff7e67'
//     },
//     success: {
//       main: '#42b883'
//     }
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
