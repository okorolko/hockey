import React, { PropTypes } from 'react';

export const List = (props) => {
	const { handleClick, selectedId, players } = props;
	// console.log('LIST', selectedId)
	return (
		<div style={{ overflow:'hidden', border: '1px solid gray' }}>
			<div  
			style={{ height:'40vh', overflowY: 'scroll' }}>
			{players.map((elem) => {
				let bg;
				// console.log('NAME:', elem.name)
				elem.id === selectedId ? bg = 'yellow' : bg = 'white';
				return <div key={elem.id} 
										onClick={() => handleClick(elem.id, elem.name)} 
										style={{ 
											background: bg, 
											padding: "10px", 
											fontSize: '20px', 
											border: '1px solid gray', 
											marginTop: '2px'}}>
											{elem.name}
								</div>
			})}
			</div>
		</div>
	)
}

List.propTypes = {
	handleClick: PropTypes.func.isRequired,
	selectedId: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

