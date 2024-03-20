import { PropsWithChildren, RefObject, createContext, useContext, useRef } from "react"

const CanvasContext =
    createContext<RefObject<HTMLCanvasElement>>({} as RefObject<HTMLCanvasElement>);

export const CanvasProvider = ({ children }: PropsWithChildren<{}>) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    return (
        <CanvasContext.Provider value={canvasRef}>
            {children}
        </CanvasContext.Provider>
    )
}

export const useCanvasContext = () => useContext(CanvasContext);