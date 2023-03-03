import { VariableSizeList } from 'react-window';
import Row from '../../shared/row';

const VariableSizeListRow = () => {
	const rowHeights = new Array(1000)
		.fill(true)
		.map(() => 25 + Math.round(Math.random() * 50));

	const getItemSize = (index) => rowHeights[index];
	return (
		<VariableSizeList
			itemCount={1000}
			height={150}
			width={300}
			itemSize={getItemSize}
		>
			{Row}
		</VariableSizeList>
	);
};

export default VariableSizeListRow;
