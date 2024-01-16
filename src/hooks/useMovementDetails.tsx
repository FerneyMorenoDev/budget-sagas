import { useEffect, useState } from 'react';

export const useMovementDetails = (
	{
		desc,
		val,
		isExp,
	}: {
		desc: string;
		val: number;
		isExp: boolean;
	} = { desc: '', val: 0, isExp: true }
) => {
	const [description, setDescription] = useState(desc);
	const [value, setValue] = useState(val);
	const [isExpense, setIsExpense] = useState(isExp);
	const [isOpen, setIsOpen] = useState(false);

	const handleClearMovementInfo = () => {
		setDescription('');
		setValue(0);
		setIsExpense(true);
	};

	useEffect(() => {
		setDescription(desc);
		setValue(val);
		setIsExpense(isExp);
	}, [desc, isExp, val]);

	return {
		description,
		value,
		isExpense,
		isOpen,
		setDescription,
		setValue,
		setIsExpense,
		setIsOpen,
		clearMovementInfo: handleClearMovementInfo,
	};
};

