import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { store } from './states/store';
import { Provider } from 'react-redux';
import { CanvasProvider } from './states/CanvasContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CanvasProvider>
        <App />
      </CanvasProvider>
    </Provider>
  </React.StrictMode>
);
