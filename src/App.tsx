import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import { MainHeader } from './components/MainHeader';
import { NewMovement } from './components/NewMovement';
import { DisplayBalance } from './components/DisplayBalance';
import { DisplayBalances } from './components/DisplayBalances';
import { Movements } from './components/Movements';
import { ModalEditMovement } from './components/ModalEditMovement';

import { movementsSelector } from './selectors/movements.selector';

import { useDisplayBalances } from './hooks/useDisplayBalances';

import { getMovs } from './features/movements/movementsSlice';

import './App.css';

function App(): React.JSX.Element {
	const { data: movements, isLoading } = useSelector(movementsSelector);
	const dispatch = useDispatch();
	const { incoming, expenses, total } = useDisplayBalances(movements);

	useEffect(() => {
		dispatch(getMovs());
	}, [dispatch]);

	return (
		<Container>
			<MainHeader title='Budget' />
			<DisplayBalance size='small' label='your balance' value={total} />
			<DisplayBalances incoming={incoming} expenses={expenses} />
			<MainHeader type='h3' title='History' />
			{isLoading ? <h1>Loading...</h1> : <Movements movements={movements} />}
			<MainHeader type='h3' title='Add new transaction' />
			<NewMovement />
			<ModalEditMovement />
		</Container>
	);
}

export default App;

