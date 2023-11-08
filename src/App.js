import {
	Button,
	Container,
	Form,
	Grid,
	Header,
	Icon,
	Segment,
	Statistic,
} from 'semantic-ui-react';
import './App.css';

function App() {
	return (
		<Container>
			<Header as='h1'>Budget</Header>
			<Statistic size='small'>
				<Statistic.Label>your balance:</Statistic.Label>
				<Statistic.Value>2.500.000</Statistic.Value>
			</Statistic>
			<Segment textAlign='center'>
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>
							<Statistic size='tiny' color='green'>
								<Statistic.Label style={{ textAlign: 'center' }}>
									Incoming:
								</Statistic.Label>
								<Statistic.Value>1.500.000</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic size='tiny' color='red'>
								<Statistic.Label style={{ textAlign: 'center' }}>
									Expenses:
								</Statistic.Label>
								<Statistic.Value>400.000</Statistic.Value>
							</Statistic>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Header as='h3'>History</Header>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column textAlign='left'>credit card</Grid.Column>
						<Grid.Column>300.000</Grid.Column>
						<Grid.Column>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column textAlign='left'>cats</Grid.Column>
						<Grid.Column>200.000</Grid.Column>
						<Grid.Column>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color='green'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column textAlign='left'>salary</Grid.Column>
						<Grid.Column>12.000.000</Grid.Column>
						<Grid.Column>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column textAlign='left'>coomeva</Grid.Column>
						<Grid.Column>100.000</Grid.Column>
						<Grid.Column>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Header as='h3'>Add new transaction</Header>
			<Form unstackable>
				<Form.Group>
					<Form.Input
						icon='tags'
						width={12}
						label='description'
						placeholder='new shinny thing'
					/>
					<Form.Input
						icon='dollar'
						width={4}
						label='value'
						placeholder='100.000'
						iconPosition='left'
					/>
				</Form.Group>
				<Button.Group style={{ marginTop: 20 }}>
					<Button>Cancel</Button>
					<Button.Or />
					<Button primary>Ok</Button>
				</Button.Group>
			</Form>
		</Container>
	);
}

export default App;

