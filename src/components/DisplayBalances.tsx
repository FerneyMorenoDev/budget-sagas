import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import { DisplayBalance } from './DisplayBalance';

export const DisplayBalances = (): React.JSX.Element => {
	return (
		<Segment textAlign='center'>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance
							size='tiny'
							color='green'
							label='Incoming:'
							value='1.500.000'
						/>
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance
							size='tiny'
							color='red'
							label='Expenses:'
							value='400.000'
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

