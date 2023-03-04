import React from 'react';

const ListItem = ({ item, isSelected, onClick }) => {
	return (
		<div
			style={{
				backgroundColor: isSelected ? 'lightblue' : 'white',
				padding: '10px',
				borderBottom: '1px solid gray',
				cursor: 'pointer',
			}}
			onClick={onClick}
		>
			{item.label}
		</div>
	);
};

export default ListItem;
