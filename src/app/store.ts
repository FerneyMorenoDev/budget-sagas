import { configureStore } from '@reduxjs/toolkit';
import movementsReducer from '../features/movements/movementsSlice';
import modalReducer from '../features/modal/modalSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		movements: movementsReducer,
		modal: modalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

//this is the method the store has to get the state inside it
// console.log('----', store.getState());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

