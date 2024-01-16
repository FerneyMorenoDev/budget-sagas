import React, { memo } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import { DisplayBalance } from './DisplayBalance';

export const DisplayBalances = memo(
	({
		incoming = 0,
		expenses = 0,
	}: {
		incoming: number;
		expenses: number;
	}): React.JSX.Element => {
		return (
			<Segment textAlign='center'>
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>
							<DisplayBalance
								size='tiny'
								color='green'
								label='Incoming:'
								value={incoming}
							/>
						</Grid.Column>
						<Grid.Column>
							<DisplayBalance
								size='tiny'
								color='red'
								label='Expenses:'
								value={expenses}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
);

