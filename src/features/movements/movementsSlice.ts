import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { MOVEMENTS } from '../../constants/movements';

import { Movement, Movements } from '../../types/movement';

const initialState: Movements = {
	data: [],
	isLoading: false,
	error: '',
};

export const movementsSlice = createSlice({
	name: MOVEMENTS,
	initialState,
	reducers: {
		getMovs: (state) => {
			state.isLoading = true;
			state.error = '';
		},
		getMovsSuccess: (state, action: PayloadAction<Movement[]>) => {
			state.data = action.payload;
			state.isLoading = false;
		},
		getMovsError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		addMov: (state, action: PayloadAction<Movement>) => {
			state.data && state.data.push(action.payload);
		},
		updateMov: (state, action: PayloadAction<Movement>) => {
			const movement =
				state.data && state.data.find((mov) => mov.id === action.payload.id);
			if (movement) {
				movement.description = action.payload.description;
				movement.value = action.payload.value;
				movement.isExpense = action.payload.isExpense;
			}
		},
		deleteMov: (state, action: PayloadAction<string>) => {
			if (action.payload)
				state.data =
					state.data && state.data.filter((mov) => mov.id !== action.payload);
			return state;
		},
	},
});

export const {
	addMov,
	deleteMov,
	updateMov,
	getMovs,
	getMovsSuccess,
	getMovsError,
} = movementsSlice.actions;
export default movementsSlice.reducer;

