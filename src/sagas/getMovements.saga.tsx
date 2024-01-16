import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_MOVEMENTS } from '../constants/movements';

import {
	getMovsError,
	getMovsSuccess,
} from '../features/movements/movementsSlice';

import { Movement } from '../types/movement';
import { getMovements } from '../api/movements';

export function* getMovementsSaga() {
	try {
		const data: Movement[] = yield call(getMovements);
		yield put(getMovsSuccess(data));
	} catch (err) {
		yield put(getMovsError(err));
	}
}

export function* watchGetMovs() {
	yield takeLatest(GET_MOVEMENTS, getMovementsSaga);
}

