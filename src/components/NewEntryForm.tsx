import React from 'react';
import { Form } from 'semantic-ui-react';
import { ButtonSaveOrCancel } from './ButtonSaveOrCancel';

export const NewEntryForm = (): React.JSX.Element => (
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
		<ButtonSaveOrCancel />
	</Form>
);

