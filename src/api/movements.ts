import axios, { AxiosResponse } from 'axios';
import { Movement } from '../types/movement';

const BASE_URL = 'http://localhost:3001/movements';

export const getMovements = async () => {
	try {
		const { data }: AxiosResponse<Movement[]> = await axios.get(BASE_URL);
		return data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

export const addMovement = async (mov: Movement) => {
	try {
		const { data }: AxiosResponse<Movement[]> = await axios.post(BASE_URL, mov);
		return data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

export const updateMovement = async (id: string, mov: Movement) => {
	try {
		const { data }: AxiosResponse<Movement[]> = await axios.put(
			`${BASE_URL}${id}`,
			mov
		);
		return data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

export const deleteMovement = async (id: string) => {
	try {
		await axios.delete(`${BASE_URL}${id}`);
	} catch (err) {
		console.error(err);
		return err;
	}
};

