import { useDrag } from "react-dnd";


export const useItemDrag = () => {

    const [isDragging , drag] = useDrag({
        // Specify the type of the draggable item
        type: 'DRAGBOX',
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        
    });

    return { isDragging, drag };
};