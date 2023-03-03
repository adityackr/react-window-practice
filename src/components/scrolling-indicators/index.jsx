import React from 'react';
import { FixedSizeList } from 'react-window';
import ScrollingRow from '../shared/scrolling-row';

const ScrollingIndicators = (props) => {
	return (
		<FixedSizeList
			height={150}
			width={300}
			itemCount={1000}
			itemSize={30}
			useIsScrolling
			{...props}
		>
			{ScrollingRow}
		</FixedSizeList>
	);
};

export default ScrollingIndicators;
