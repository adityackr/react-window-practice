import React from 'react';
import { FixedSizeList } from 'react-window';
import Row from '../../shared/row';

const FixedSizedListRow = () => {
	return (
		<FixedSizeList height={150} itemCount={1000} itemSize={30} width={300}>
			{Row}
		</FixedSizeList>
	);
};

export default FixedSizedListRow;
