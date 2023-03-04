import { useMemo, useState } from 'react';
import { FixedSizeList } from 'react-window';
import ListItem from '../shared/list-items';

const MemoizeItems = ({ items }) => {
	const [selectedItem, setSelectedItem] = useState(null);

	const memoizedItems = useMemo(() => {
		return items.map((item) => {
			if (item.id === selectedItem?.id) {
				return selectedItem;
			} else {
				return item;
			}
		});
	}, [items, selectedItem]);

	const renderRow = ({ index, style }) => {
		const item = memoizedItems[index];

		return (
			<ListItem
				item={item}
				isSelected={selectedItem?.id === item.id}
				onClick={() => setSelectedItem(item)}
				style={style}
			/>
		);
	};

	return (
		<FixedSizeList
			height={400}
			itemCount={items.length}
			itemSize={50}
			width={400}
		>
			{renderRow}
		</FixedSizeList>
	);
};

export default MemoizeItems;
