import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';

export const Movement = ({
	isExpense = false,
	description,
	value,
}: {
	isExpense?: boolean;
	description: string;
	value: string;
}): React.JSX.Element => {
	return (
		<Segment color={isExpense ? 'red' : 'green'}>
			<Grid columns={3} textAlign='right'>
				<Grid.Row>
					<Grid.Column textAlign='left'>{description}</Grid.Column>
					<Grid.Column>{value}</Grid.Column>
					<Grid.Column>
						<Icon name='edit' bordered />
						<Icon name='trash' bordered />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

