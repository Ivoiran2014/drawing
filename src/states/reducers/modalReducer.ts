import { PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../utils/type";
import { RootState } from "../store";


export const showModalReducer = (state: ModalState, action: PayloadAction<string>) => {
    state.isShown = true;
    state.modalName = action.payload;
}

export const hideModalReducer = (state: ModalState) => {
    state.isShown = true;
    state.modalName = null;
}

export const modalNameSelector = (state: RootState) => state.modalReducer.modalName;

