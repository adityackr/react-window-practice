import React, { useRef } from 'react';
import { FixedSizeList } from 'react-window';
import Row from '../shared/row';

const ScrollingToItem = (props) => {
	const listRef = useRef(0);

	const scrollToRow200Auto = () => listRef.current.scrollToItem(200);
	const scrollToRow250Smart = () => listRef.current.scrollToItem(250, 'smart');
	const scrollToRow300Center = () =>
		listRef.current.scrollToItem(300, 'center');
	return (
		<>
			<div>
				<button onClick={scrollToRow200Auto}>
					Scroll to row 200 (align: auto)
				</button>
				<button onClick={scrollToRow250Smart}>
					Scroll to row 250 (align: smart)
				</button>
				<button onClick={scrollToRow300Center}>
					Scroll to row 300 (align: center)
				</button>
			</div>
			<FixedSizeList
				height={150}
				itemCount={1000}
				itemSize={35}
				ref={listRef}
				width={300}
				{...props}
			>
				{Row}
			</FixedSizeList>
		</>
	);
};

export default ScrollingToItem;
