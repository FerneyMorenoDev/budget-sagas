import React from 'react';
import { Movement as Mov } from '../types/movement';
import { Movement } from './Movement';
import { Container } from 'semantic-ui-react';

export const Movements = ({
	movements,
}: {
	movements: Mov[];
}): React.JSX.Element => {
	return (
		<Container>
			{movements.map((movement: Mov) => {
				return <Movement key={movement.id} {...movement} />;
			})}
		</Container>
	);
};

