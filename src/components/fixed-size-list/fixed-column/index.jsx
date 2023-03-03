import { FixedSizeList } from 'react-window';
import Column from '../../shared/column';

const FixedSizedListColumn = () => {
	return (
		<FixedSizeList
			height={75}
			itemCount={1000}
			width={300}
			itemSize={100}
			layout={'horizontal'}
		>
			{Column}
		</FixedSizeList>
	);
};

export default FixedSizedListColumn;
