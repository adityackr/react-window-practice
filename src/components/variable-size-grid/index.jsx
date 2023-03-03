import React from 'react';
import { VariableSizeGrid } from 'react-window';
import Cell from '../shared/cell';

const VariableSizeGridExample = () => {
	const rowHeights = new Array(1000)
		.fill(true)
		.map(() => 25 + Math.round(Math.random() * 50));

	const columnWidths = new Array(1000)
		.fill(true)
		.map(() => 75 + Math.round(Math.random() * 50));

	return (
		<VariableSizeGrid
			columnCount={1000}
			columnWidth={(index) => columnWidths[index]}
			height={150}
			rowCount={1000}
			rowHeight={(index) => rowHeights[index]}
			width={300}
		>
			{Cell}
		</VariableSizeGrid>
	);
};

export default VariableSizeGridExample;
