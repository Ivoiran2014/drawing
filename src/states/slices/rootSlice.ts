import { createSlice } from '@reduxjs/toolkit';
import { DrawingState } from '../../utils/type';
import {
    beginStrokeReducer,
    updateStrokeReducer,
    endStrokeReducer,
    setColorReducer,
} from '../reducers/drawingReducer';

import { undoReducer, redoRecuer } from "../reducers/historyReducer";


const initialState: DrawingState = {
    currentStroke: {
        points: [],
        color: '#000'
    },
    strokes: [],
    historyIndex:0
};

const drawingSlice = createSlice({
    name: 'drawing',
    initialState,
    reducers: {
        beginStroke: beginStrokeReducer,
        updateStroke: updateStrokeReducer,
        endStroke: endStrokeReducer,
        setStrokeColor: setColorReducer,
        undo: undoReducer,
        redo: redoRecuer
    }
});


export const {
    beginStroke, updateStroke,
    endStroke, setStrokeColor,
    undo, redo
} =
    drawingSlice.actions;

export default drawingSlice.reducer;