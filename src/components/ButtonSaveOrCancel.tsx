import React from 'react';
import { Button } from 'semantic-ui-react';

export const ButtonSaveCancel = ({
	onSave,
	onCancel,
}: {
	onSave: () => void;
	onCancel: () => void;
}): React.JSX.Element => (
	<div style={{ marginTop: 20 }}>
		<Button secondary onClick={onCancel}>
			Cancel
		</Button>
		<Button type='submit' primary onClick={onSave}>
			Ok
		</Button>
	</div>
);

