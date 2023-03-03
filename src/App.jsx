import FixedSizeGridExample from './components/fixed-size-grid';
import FixedSizedListColumn from './components/fixed-size-list/fixed-column';
import FixedSizedListRow from './components/fixed-size-list/fixed-row';
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
		</div>
	);
};

export default App;
