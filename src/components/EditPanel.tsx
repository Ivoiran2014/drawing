import { useAppDispatch } from "../states/selectorHook";
import { undo, redo } from "../states/slices/rootSlice";

export const EditPanel = () => {
    const dispatch = useAppDispatch();
   
    return (
        <div
            className="window edit"
            style={{
                position: "relative",
                top: 50,
                left: 0,
                width:'180px'
            }}
        >
            <div className="title-bar">
                <div className="title-bar-text">Edit</div>
            </div>
            <div className="window-body">
                <div className="field-row">
                    <button
                        className="button redo"
                        onClick={() => dispatch(undo())}
                    >
                        Undo
                    </button>
                    <button
                        className="button undo"
                        onClick={() => dispatch(redo())}
                    >
                        Redo
                    </button>
                </div>
            </div>
        </div>
    );
}