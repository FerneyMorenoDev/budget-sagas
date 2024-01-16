import React from 'react';
import { ButtonSaveCancel } from './ButtonSaveOrCancel';
import { FormMovement } from './FormMovement';
import { useMovementDetails } from '../hooks/useMovementDetails';
import { addMov } from '../features/movements/movementsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export const NewMovement = (): React.JSX.Element => {
	const dispatch = useDispatch();
	const {
		description,
		value,
		isExpense,
		setDescription,
		setValue,
		setIsExpense,
		clearMovementInfo,
	} = useMovementDetails();

	const handleAddMovement = () => {
		if (value || description) {
			dispatch(
				addMov({
					id: uuidv4(),
					description,
					value,
					isExpense,
				})
			);
		}
		clearMovementInfo();
	};

	return (
		<>
			<FormMovement
				description={description}
				value={value}
				isExpense={isExpense}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
			/>
			<ButtonSaveCancel onSave={handleAddMovement} onCancel={clearMovementInfo} />
		</>
	);
};

