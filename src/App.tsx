import React, { useEffect } from 'react';
import {
  clearCanvas, setCanvasSize,
  drawStroke, prepareContext
} from './utils/canvasUtils';
import { useAppDispatch, useAppSelector } from './states/selectorHook';
import { beginStroke, updateStroke, endStroke } from './states/slices/rootSlice';
import { currentStroSelector, strokesSelector } from './states/reducers/drawingReducer';
import { ColorPanel } from './components/ColorPanel';
import { EditPanel } from './components/EditPanel';
import { historyIndexSelector } from './states/reducers/historyReducer';
import { useCanvasContext } from './states/CanvasContext';
import { FilePanel } from './components/FilePanel';
import { ModalLayer } from './components/ModalLayer';


export const App = () => {
  const WIDTH = 1024;
  const HEIGHT = 768;
  const canvasRef = useCanvasContext();

  const currentStroke = useAppSelector(currentStroSelector);
  const strokes = useAppSelector(strokesSelector);
  const historyIndex = useAppSelector(historyIndexSelector);

  const isDrawing = useAppSelector((state) =>
    !!currentStroke.points.length
  );

  const dispatch = useAppDispatch();

  const getCanvasWithContext = (canvas = canvasRef.current ) => {
    return { canvas: canvas, context: canvas?.getContext('2d') };
  }  

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(
      beginStroke({
        x: offsetX,
        y: offsetY
      })
    );
  }

  const endDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      dispatch(endStroke());
    }
  }
  

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke({
      x: offsetX,
      y: offsetY
    }));
  }

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return
    }
    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    })

  }, [currentStroke, getCanvasWithContext]);


  useEffect(() => {

    const { canvas, context } = getCanvasWithContext();
    // Check if the canvas is not null
    if (!canvas || !context) {
      return;
    }
    // Define the canvas where we will be drawing
    setCanvasSize(canvas, WIDTH, HEIGHT);
    prepareContext(context);

    clearCanvas(canvas);
  }, []);

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    // Check if the canvas is not null
    if (!canvas || !context) {
      return;
    }

    requestAnimationFrame(() => {
      clearCanvas(canvas);

      // Remove the strokes history 
      strokes
        .slice(0, (strokes.length - historyIndex))
        .forEach((stroke) => {
          drawStroke(context, stroke.points, stroke.color);
      })
    });
  }, [getCanvasWithContext, historyIndex, strokes])

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Let's Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>

      <EditPanel />
      <ColorPanel />
      <FilePanel />
      <ModalLayer />
      
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onMouseOut={endDrawing}
      />
      
    </div>
 )
}

