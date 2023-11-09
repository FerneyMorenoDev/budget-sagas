import { Container } from 'semantic-ui-react';
import { MainHeader } from './components/MainHeader';
import './App.css';
import React from 'react';
import { NewEntryForm } from './components/NewEntryForm';
import { DisplayBalance } from './components/DisplayBalance';
import { DisplayBalances } from './components/DisplayBalances';
import { Movement } from './components/Movement';

function App() {
	return (
		<Container>
			<MainHeader title='Budget' />
			<DisplayBalance size='small' label='your balance' value='2.500.000' />
			<DisplayBalances />
			<MainHeader type='h3' title='History' />
			<Movement description='credit card' value='300.000' isExpense />
			<Movement description='cats' value='200.000' isExpense />
			<Movement description='salary' value='12.000.000' />
			<Movement description='coomeva' value='100.000' isExpense />
			<MainHeader type='h3' title='Add new transaction' />
			<NewEntryForm />
		</Container>
	);
}

export default App;

