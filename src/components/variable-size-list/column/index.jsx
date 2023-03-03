import { VariableSizeList } from 'react-window';
import Column from '../../shared/column';

const VariableSizeListColumn = () => {
	const columnWidths = new Array(1000)
		.fill(true)
		.map(() => 75 + Math.round(Math.random() * 50));

	const getItemSize = (index) => columnWidths[index];
	return (
		<VariableSizeList
			itemCount={1000}
			height={75}
			width={300}
			layout={'horizontal'}
			itemSize={getItemSize}
		>
			{Column}
		</VariableSizeList>
	);
};

export default VariableSizeListColumn;
