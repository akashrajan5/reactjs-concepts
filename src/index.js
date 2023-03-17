import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './components/ClassContext/ContextProvider';
// import ContextProvider from './components/ContextProvider';
import { ErrorBoundaries } from './components/ErrorBoundaryComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ErrorBoundaries>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ErrorBoundaries>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
