import React from 'react';
import ReactDOM from 'react-dom/client';

import {ThemeProvider} from "@mui/material";

import App from './App';
import primaryTheme from "theme/primary";
import './default.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={primaryTheme}>
    <App />
  </ThemeProvider>
);
