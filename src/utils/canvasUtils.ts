import { Point } from "./type";


export const clearCanvas = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');

    if (!context) {
        return
    }
    // Change the canvas background
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}


export const setCanvasSize =
    (canvas: HTMLCanvasElement, height: number, width: number) => {
    
    canvas.width = width * 2;    
    canvas.height = height * 2;
    
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    
    canvas.getContext('2d')?.scale(2,2);
}

export const prepareContext = (context: CanvasRenderingContext2D) => {
    // Line have round join when they meet
    context.lineJoin = "round";
    // Do you want the end of your line to be pointy or round like tip of marker
    context.lineCap = "round";
    // The width of the line
    context.lineWidth = 5;
    // The color of the drawing line
    context.strokeStyle = "black";
}

export const drawStroke = (context: CanvasRenderingContext2D, points: Point[],
    color: string) => {
    
    // Check that there is actual points
    if (!points.length) {
        return;
    }

    context.strokeStyle = color;
    // We are starting to draw
    context.beginPath();
    // Put the pen at the starting of the canvas context
    context.moveTo(points[0].x, points[0].y);
    
    points.forEach((point) => {
        // Starting drawing the dot for each point 
        context.lineTo(point.x, point.y);
        // show the line that we draw on the canvas
        context.stroke();
    });

    // Check if all the line are connected
    context.closePath();
}


export const getCanvasImage = (canvas: HTMLCanvasElement | null): Promise<null | Blob> => {
    return new Promise((resolve, reject) => {
        if (!canvas) {
            return reject(null);
        }

        canvas.toBlob(resolve);
    })
}