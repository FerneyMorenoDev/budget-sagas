import { call, takeLatest } from 'redux-saga/effects';
import { addMovement } from '../api/movements';
import { addMov } from '../features/movements/movementsSlice';
import { Movement } from '../types/movement';

export function* addMovementSaga({ payload }: { payload: Movement }) {
	try {
		yield call(addMovement, payload);
	} catch (err) {
		console.log(err);
	}
}

export function* watchAddMovementSaga() {
	yield takeLatest(addMov, addMovementSaga);
}

