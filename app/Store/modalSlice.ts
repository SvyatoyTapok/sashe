import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isOpen: false }, // Начальное состояние — закрыто
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        toggleModal: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;