import React from 'react';
import { Statistic } from 'semantic-ui-react';
import { type SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';
import { type StatisticSizeProp } from 'semantic-ui-react/dist/commonjs/views/Statistic/Statistic';

export const DisplayBalance = ({
	size,
	label,
	value,
	color,
}: {
	size: StatisticSizeProp;
	label: string;
	value: string;
	color?: SemanticCOLORS;
}): React.JSX.Element => (
	<Statistic color={color} size={size}>
		<Statistic.Label>{label}</Statistic.Label>
		<Statistic.Value>{value}</Statistic.Value>
	</Statistic>
);

