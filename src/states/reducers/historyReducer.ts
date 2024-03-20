import { DrawingState } from '../../utils/type';
import { RootState } from '../store';

export const undoReducer = (state: DrawingState) => {
    const historyIndex = Math.min(state.historyIndex + 1, state.strokes.length);
    state.historyIndex = historyIndex;
}

export const redoRecuer = (state: DrawingState) => {
    const historyIndex = Math.max(state.historyIndex - 1, 0);
    state.historyIndex = historyIndex;
}

export const historyIndexSelector = (state: RootState) =>
    state.drawingReducer.historyIndex;