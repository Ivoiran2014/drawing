import { useAppDispatch } from "../states/selectorHook";
import { hideModal } from "../states/slices/modalSlice";


export const ProjectsModal = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="window modal-panel">
            <div className="title-bar">
                <div className="title-bar-text">Load Project</div>
                <div className="title-bar-controls">
                    <button
                        aria-label="Close"
                        onClick={() => dispatch(hideModal())}
                    />
                </div>
            </div>
            <div className="projects-container">Projects List</div>
        </div>
    );
}