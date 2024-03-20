import { PayloadAction } from '@reduxjs/toolkit';
import { Point } from '../../utils/type';
import { DrawingState } from '../../utils/type';
import { RootState } from '../store';


export const beginStrokeReducer = (state: DrawingState, action: PayloadAction<Point>) => {
    state.currentStroke.points = [action.payload];
}

export const updateStrokeReducer = (state: DrawingState, action: PayloadAction<Point>) => {
    state.currentStroke.points.push(action.payload);
}

export const endStrokeReducer = (state: DrawingState) => {
    if (state.currentStroke.points.length === 0) {
        return state;
    }

    const historyIndex = state.strokes.length - state.historyIndex;

    const newState = {
        ...state,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [
            ...state.strokes.slice(0,historyIndex),
            state.currentStroke
        ],
        historyIndex:0
    };

    return newState;
}

export const setColorReducer = (state: DrawingState, action: PayloadAction<string>) => {
    state.currentStroke.color = action.payload;
}


export const currentStroSelector = (state: RootState) => state.drawingReducer.currentStroke;
export const strokesSelector = (state: RootState) => state.drawingReducer.strokes;