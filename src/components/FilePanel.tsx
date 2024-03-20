import { saveAs } from 'file-saver';
import { getCanvasImage } from "../utils/canvasUtils"
import { useCanvasContext } from "../states/CanvasContext"
// import { useAppDispatch } from "../states/selectorHook";
// import { showModal } from "../states/slices/modalSlice";

export const FilePanel = () => {
    const canvasRef = useCanvasContext();

    const exportToFile = async () => {
        const file = await getCanvasImage(canvasRef.current);
        
        if (!file) {
            return;
        }

        saveAs(file, 'image.png');
    }

    // const dispatch = useAppDispatch();


    return (
        
        <div
            className="window file"
        >
            <div className="title-bar">
                <div className="title-bar-text">File</div>
            </div>
                    
            <div className="window-body">
                <div className="field-row">
                    <button className="save-button" onClick={exportToFile}>
                        Export
                    </button>
                            
                    {/* <button
                                className="save-button"
                                onClick={() => {
                                    dispatch(showModal("PROJECTS_SAVE_MODAL"))
                                }}
                            >
                                Save
                            </button>
                            
                            <button
                                className="save-button"
                                onClick={() => {
                                    dispatch(showModal("PROJECTS_MODAL"))
                                }}
                            >
                                Load
                            </button> */}

                </div>
            </div>
        </div>
        
    );
}