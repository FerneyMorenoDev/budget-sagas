import React from 'react';
import { useDispatch } from 'react-redux';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import { deleteMov } from '../features/movements/movementsSlice';
import { AppDispatch } from '../app/store';
import { openModalEdit } from '../features/modal/modalSlice';
import './Movement.scss';

export const Movement = ({
	isExpense = false,
	description,
	value,
	id,
}: {
	isExpense: boolean;
	description: string;
	value: number;
	id: string;
}): React.JSX.Element => {
	const dispatch: AppDispatch = useDispatch();

	const handleOpenModalEdit = () => {
		dispatch(openModalEdit({ id: id }));
	};

	const handleDeleteMov = () => {
		console.log(deleteMov(id));
		dispatch(deleteMov(id));
	};

	return (
		<>
			<Segment className='Movement' color={isExpense ? 'red' : 'green'}>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column textAlign='left' className='Movement__column'>
							{description}
						</Grid.Column>
						<Grid.Column className='Movement__column'>{value}</Grid.Column>
						<Grid.Column>
							<Button color='teal' icon onClick={handleOpenModalEdit}>
								<Icon name='edit' />
							</Button>
							<Button color='red' icon onClick={handleDeleteMov}>
								<Icon name='trash' />
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</>
	);
};

