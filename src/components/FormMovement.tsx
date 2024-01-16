import React from 'react';
import { Form } from 'semantic-ui-react';

export const FormMovement = ({
	description,
	value,
	isExpense,
	setDescription,
	setValue,
	setIsExpense,
}: {
	description: string;
	value: number;
	isExpense: boolean;
	setDescription: (description: string) => void;
	setValue: (value: number) => void;
	setIsExpense: (isExpense: boolean) => void;
}) => {
	const handleDescription = (e: { target: { value: string } }) => {
		setDescription(e.target.value);
	};
	const handleValue = (e: { target: { value: string } }) => {
		setValue(Number(e.target.value));
	};

	const handleIsExpense = () => {
		setIsExpense(!isExpense);
	};

	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input
					icon='tags'
					width={12}
					label='description'
					placeholder='new shinny thing'
					value={description}
					onChange={(e) => handleDescription(e)}
				/>
				<Form.Input
					icon='dollar'
					width={4}
					label='value'
					placeholder='100.000'
					iconPosition='left'
					value={value}
					onChange={(e) => handleValue(e)}
				/>
			</Form.Group>
			<Form.Checkbox
				label='is expense'
				onChange={handleIsExpense}
				checked={isExpense}
			/>
		</Form>
	);
};

