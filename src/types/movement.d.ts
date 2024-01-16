import { MOVEMENTS, GET_MOVEMENTS } from '../constants/movements';

export type Movement = {
	id: string;
	description: string;
	value: number;
	isExpense: boolean;
};

export interface Movements {
	data: Movement[];
	isLoading: boolean;
	error: string;
}

export type MOVEMENTS = typeof MOVEMENTS;
export type GET_MOVEMENTS = typeof GET_MOVEMENTS;

