import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { FormMovement } from './FormMovement';
import { useMovementDetails } from '../hooks/useMovementDetails';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { closeModalEdit } from '../features/modal/modalSlice';
import { updateMov } from '../features/movements/movementsSlice';
import { Movement } from '../types/movement';
import { movementsSelector } from '../selectors/movements.selector';

export const ModalEditMovement = (): React.JSX.Element => {
	const { data: movements } = useSelector(movementsSelector);
	const { isOpen, id = '' } = useSelector((state: RootState) => state.modal);
	const dispatch = useDispatch();

	const {
		description: desc,
		value: val,
		isExpense: isExp,
	} = movements.find((mov: Movement): boolean => mov.id === id) ?? {
		description: '',
		value: 0,
		isExpense: true,
	};

	const {
		description,
		value,
		isExpense,
		setDescription,
		setValue,
		setIsExpense,
	} = useMovementDetails({ desc, val, isExp });

	const handleUpdateMovement = () => {
		dispatch(
			updateMov({
				id,
				description,
				value,
				isExpense,
			})
		);
		dispatch(closeModalEdit());
	};

	const handleCancelEdition = () => {
		dispatch(closeModalEdit());
	};

	return (
		<Modal onClose={handleCancelEdition} open={isOpen}>
			<Modal.Header>Edit Movement</Modal.Header>
			<Modal.Content>
				<FormMovement
					description={description}
					value={value}
					isExpense={isExpense}
					setDescription={setDescription}
					setValue={setValue}
					setIsExpense={setIsExpense}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' onClick={handleCancelEdition}>
					Cancel
				</Button>
				<Button color='green' onClick={handleUpdateMovement}>
					Save
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

