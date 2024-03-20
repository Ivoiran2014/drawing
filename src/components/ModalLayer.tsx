import { useAppSelector } from "../states/selectorHook";
import { ProjectsModal } from "./ProjectsModal";
import { ProjectSaveModal } from "./ProjectSaveModal";
import { modalNameSelector } from "../states/reducers/modalReducer";


export const ModalLayer = () => {
    const modalName = useAppSelector(modalNameSelector);

    switch (modalName) {
        case 'PROJECTS_MODAL': {
            return <ProjectsModal />
        }
            
        case 'PROJECTS_SAVE_MODAL': {
            return <ProjectSaveModal />
        }
            
        default:
            return null;

    }
}