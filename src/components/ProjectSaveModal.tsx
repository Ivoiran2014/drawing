import { useAppDispatch } from "../states/selectorHook";
import { hideModal } from "../states/slices/modalSlice";



export const ProjectSaveModal = () => {
    const dispatch = useAppDispatch()

    return (
        <div className="window modal-panel">
            <div className="title-bar">
                <div className="title-bar-text">Save</div>
            </div>
            <div className="window-body">
                <div className="field-row">
                    <button onClick={() => dispatch(hideModal())}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
