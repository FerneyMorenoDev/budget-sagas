import { useMemo } from 'react';
import { Movement } from '../types/movement';

export const useDisplayBalances = (movements: Movement[] | []) => {
	const { incoming, expenses, total } = useMemo(() => {
		return (
			movements &&
			movements.reduce(
				(
					{ incoming, expenses, total },
					mov
				): { incoming: number; expenses: number; total: number } => {
					if (mov.isExpense) expenses += Number(mov.value);
					else incoming += Number(mov.value);
					total = incoming - expenses;
					return { incoming, expenses, total };
				},
				{ incoming: 0, expenses: 0, total: 0 }
			)
		);
	}, [movements]);

	return {
		incoming,
		expenses,
		total,
	};
};

