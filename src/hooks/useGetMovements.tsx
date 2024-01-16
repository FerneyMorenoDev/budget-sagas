import { useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';

export const useGetMovewments = () => {
	const [movements, setMovements] = useState<AxiosResponse>();

	useEffect(() => {
		const getMovements = async () => {
			try {
				const { data } = await axios.get('http://localhost:3001/movements');
				setMovements(data);
			} catch (err) {
				console.error(err);
			}
		};

		getMovements();
	}, []);

	return {
		movements,
	};
};

