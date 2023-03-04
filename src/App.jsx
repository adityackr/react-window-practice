import FixedSizeGridExample from './components/fixed-size-grid';
import FixedSizedListColumn from './components/fixed-size-list/fixed-column';
import FixedSizedListRow from './components/fixed-size-list/fixed-row';
import MemoizeItems from './components/memoize-items';
import ScrollingIndicators from './components/scrolling-indicators';
import ScrollingToItem from './components/scrolling-to-item';
import VariableSizeGridExample from './components/variable-size-grid';
import VariableSizeListColumn from './components/variable-size-list/column';
import VariableSizeListRow from './components/variable-size-list/row';

const items = [
	{ id: 1, label: 'Item 1' },
	{ id: 2, label: 'Item 2' },
	{ id: 3, label: 'Item 3' },
	{ id: 4, label: 'Item 4' },
	{ id: 5, label: 'Item 5' },
	{ id: 6, label: 'Item 6' },
	{ id: 7, label: 'Item 7' },
	{ id: 8, label: 'Item 8' },
	{ id: 9, label: 'Item 9' },
	{ id: 10, label: 'Item 10' },
	{ id: 11, label: 'Item 11' },
	{ id: 12, label: 'Item 12' },
	{ id: 13, label: 'Item 13' },
	{ id: 14, label: 'Item 14' },
	{ id: 15, label: 'Item 15' },
	{ id: 16, label: 'Item 16' },
	{ id: 17, label: 'Item 17' },
	{ id: 18, label: 'Item 18' },
	{ id: 19, label: 'Item 19' },
	{ id: 20, label: 'Item 20' },
	{ id: 21, label: 'Item 21' },
	{ id: 22, label: 'Item 22' },
	{ id: 23, label: 'Item 23' },
	{ id: 24, label: 'Item 24' },
	{ id: 25, label: 'Item 25' },
	{ id: 26, label: 'Item 26' },
	{ id: 27, label: 'Item 27' },
	{ id: 28, label: 'Item 28' },
	{ id: 29, label: 'Item 29' },
	{ id: 30, label: 'Item 30' },
];

const App = () => {
	return (
		<div>
			<FixedSizedListRow />
			<hr />
			<br />
			<FixedSizedListColumn />
			<hr />
			<br />
			<VariableSizeListRow />
			<hr />
			<br />
			<VariableSizeListColumn />
			<hr />
			<br />
			<FixedSizeGridExample />
			<hr />
			<br />
			<VariableSizeGridExample />
			<hr />
			<br />
			<ScrollingIndicators />
			<hr />
			<br />
			<ScrollingToItem />
			<hr />
			<br />
			<MemoizeItems items={items} />
		</div>
	);
};

export default App;
