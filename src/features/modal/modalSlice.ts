import { createSlice } from '@reduxjs/toolkit';

interface Modal {
	isOpen: boolean;
	id?: string;
}

const initialState: Modal = {
	isOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModalEdit: (state, action) => {
			if (action.payload.id) {
				state.isOpen = true;
				state.id = action.payload.id;
			}
		},
		closeModalEdit: (state) => {
			state.isOpen = false;
		},
	},
});

export const { openModalEdit, closeModalEdit } = modalSlice.actions;
export default modalSlice.reducer;

