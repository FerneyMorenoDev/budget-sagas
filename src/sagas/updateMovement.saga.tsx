import { call, takeLatest } from 'redux-saga/effects';
import { updateMov } from '../features/movements/movementsSlice';
import { updateMovement } from '../api/movements';
import { Movement } from '../types/movement';

export function* updateMovementSaga({ payload }: { payload: Movement }) {
	try {
		yield call(updateMovement, payload.id, payload);
	} catch (err) {
		console.error(err);
	}
}

export function* watchUpdateMovementSaga() {
	yield takeLatest(updateMov, updateMovementSaga);
}

