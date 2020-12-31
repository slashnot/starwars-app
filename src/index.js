import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Global CSS for UI Framework
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

