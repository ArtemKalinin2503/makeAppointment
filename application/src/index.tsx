import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { StylesProvider } from '@material-ui/styles';
import { Container } from "material-ui-core";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <Container maxWidth="xl">
          <App />
        </Container>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
