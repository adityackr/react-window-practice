import { FixedSizeGrid } from 'react-window';
import Cell from '../shared/cell';

const FixedSizeGridExample = () => {
	return (
		<FixedSizeGrid
			columnCount={1000}
			columnWidth={100}
			height={150}
			rowCount={1000}
			rowHeight={35}
			width={300}
		>
			{Cell}
		</FixedSizeGrid>
	);
};

export default FixedSizeGridExample;
