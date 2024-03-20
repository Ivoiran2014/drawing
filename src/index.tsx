import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { store } from './states/store';
import { Provider } from 'react-redux';
import { CanvasProvider } from './states/CanvasContext';
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DndProvider backend={Backend}>
      <Provider store={store}>
        <CanvasProvider>
          <App />
        </CanvasProvider>
      </Provider>
    </DndProvider>
  </React.StrictMode>
);
