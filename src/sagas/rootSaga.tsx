import { all, fork } from 'redux-saga/effects';

import { watchGetMovs } from './getMovements.saga';
import { watchDeleteMov } from './deleteMovement.saga';
import { watchAddMovementSaga } from './addMovement.saga';
import { watchUpdateMovementSaga } from './updateMovement.saga';

export default function* rootSaga() {
	yield all([
		fork(watchGetMovs),
		fork(watchDeleteMov),
		fork(watchAddMovementSaga),
		fork(watchUpdateMovementSaga),
	]);
}

