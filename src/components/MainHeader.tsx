import React from 'react';
import { Header } from 'semantic-ui-react';

export const MainHeader = ({
	type = 'h1',
	title,
}: {
	type?: string;
	title: string;
}): React.JSX.Element => <Header as={type}>{title}</Header>;

