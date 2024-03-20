import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import drawingReducer from './slices/rootSlice';
import modalReducer from './slices/modalSlice';


export const store = configureStore({
    reducer: {
        drawingReducer,
        modalReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
