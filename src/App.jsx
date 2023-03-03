import FixedSizeGridExample from './components/fixed-size-grid';
import FixedSizedListColumn from './components/fixed-size-list/fixed-column';
import FixedSizedListRow from './components/fixed-size-list/fixed-row';
import ScrollingIndicators from './components/scrolling-indicators';
import ScrollingToItem from './components/scrolling-to-item';
import VariableSizeGridExample from './components/variable-size-grid';
import VariableSizeListColumn from './components/variable-size-list/column';
import VariableSizeListRow from './components/variable-size-list/row';

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
		</div>
	);
};

export default App;
