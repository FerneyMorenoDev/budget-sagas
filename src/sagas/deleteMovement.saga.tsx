import { call, takeLatest } from 'redux-saga/effects';
import { deleteMovement } from '../api/movements';
import { deleteMov } from '../features/movements/movementsSlice';

export function* deleteMovementSaga({ payload }: { payload: string }) {
	try {
		yield call(deleteMovement, payload);
	} catch (err) {
		console.error(err);
	}
}

export function* watchDeleteMov() {
	yield takeLatest(deleteMov, deleteMovementSaga);
}

