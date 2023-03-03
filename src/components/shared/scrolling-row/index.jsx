import React from 'react';

const ScrollingRow = ({ index, isScrolling, style }) => {
	return <div style={style}>{isScrolling ? '...' : `Row ${index}`}</div>;
};

export default ScrollingRow;
