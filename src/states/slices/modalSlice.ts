import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from '../../utils/type';
import { showModalReducer, hideModalReducer } from '../reducers/modalReducer';


const initialState: ModalState = {
    isShown: true,
    modalName: null
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: showModalReducer,
        hideModal: hideModalReducer
    }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;