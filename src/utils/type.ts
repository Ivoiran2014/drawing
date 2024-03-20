export type Point = {
    x: number,
    y: number
};

export type Stroke = {
    points: Point[],
    color: string
};

export type DrawingState = {
    currentStroke: Stroke,
    strokes: Stroke[],
    historyIndex: number,
    modalVisible?:ModalState
};

export type ModalState = {
    isShown: boolean,
    modalName: string | null
};