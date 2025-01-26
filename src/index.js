import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto-slab'; // I don't even think I used roboto-slab 
import '@fontsource/open-sans';
import App from './App';

// Create the theme
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default primary font
    h1: {
      fontFamily: 'Open Sans, Arial, sans-serif', 
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Open Sans, Arial, sans-serif', 
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Roboto, Arial, sans-serif', 
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif', 
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Open Sans, Arial, sans-serif', 
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: '#1976d2', // Blue 
    },
    secondary: {
      main: '#dc004e', // Red
    },
  },
});

// Use the new root API for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
